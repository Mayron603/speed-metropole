import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import type { AuthOptions } from "next-auth";

const guildId = "1334721407925489778";

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // This is the first sign-in.
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Fetch guild-specific member info
      if (session.user) {
        try {
          const response = await fetch(`https://discord.com/api/users/@me/guilds/${guildId}/member`, {
            headers: {
              Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const memberData = await response.json();
            if (memberData.nick) {
              (session.user as any).nickname = memberData.nick;
            }
          }
        } catch (error) {
          console.error("Failed to fetch guild member info:", error);
        }
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }