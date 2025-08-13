import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import type { AuthOptions, TokenSet } from "next-auth";
import type { JWT } from "next-auth/jwt";

const guildId = "1334721407925489778";

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
const scopes = ["identify", "email", "guilds", "guilds.members.read"].join(" ");

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const url = "https://discord.com/api/v10/oauth2/token";
    const body = new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID!,
      client_secret: process.env.DISCORD_CLIENT_SECRET!,
      grant_type: "refresh_token",
      refresh_token: token.refreshToken as string,
    });

    const response = await fetch(url, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body,
    });

    const tokens: TokenSet = await response.json();

    if (!response.ok) throw tokens;

    return {
      ...token, // Keep the previous token properties
      accessToken: tokens.access_token,
      expiresAt: Math.floor(Date.now() / 1000 + (tokens.expires_in as number)),
      // Fall back to old refresh token, but note that future refreshes may fail without a new one.
      refreshToken: tokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    // The error property will be used client-side to handle the refresh token error
    return { ...token, error: "RefreshAccessTokenError" as const };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: `https://discord.com/api/oauth2/authorize?scope=${scopes}`,
      profile(profile) {
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5;
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png";
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
        }
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.image_url,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      // Initial sign in: Fetch guild-specific data once.
      if (account && account.access_token) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;

        try {
           const response = await fetch(`https://discord.com/api/users/@me/guilds/${guildId}/member`, {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
              'Content-Type': 'application/json',
            },
          });

           if (response.ok) {
            const memberData = await response.json();
            token.nickname = memberData.nick;
            token.roles = memberData.roles;
          } else if (response.status !== 404) { // Ignore 404s (user not in guild)
             console.error("Failed to fetch guild member info on login, Status:", response.status, "Body:", await response.text());
          }
        } catch (error) {
           console.error("Error fetching guild member info on login:", error);
        }
         return token;
      }
      
      // Return previous token if the access token has not expired yet
      if (token.expiresAt && Date.now() < (token.expiresAt as number) * 1000) {
        return token;
      }
      
      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      // Pass the static data from the token to the session
      if (session.user) {
        (session.user as any).id = token.sub; // The user's Discord ID
        (session.user as any).nickname = token.nickname;
        (session.user as any).roles = token.roles;
        (session.user as any).accessToken = token.accessToken; // Still useful for client-side API calls if needed
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
