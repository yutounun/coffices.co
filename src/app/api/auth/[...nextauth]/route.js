import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import LineProvider from "next-auth/providers/line";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DB_API_KEY,
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user }) {
      const { name, email, id } = user;

      try {
        // Create new user
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, username: name, email: email }),
          }
        );
        if (response.ok) {
          return user;
        }
        return false;
      } catch {
        console.log("error:", error);
        return false;
      }
    },
    async session({ session, user, token }) {
      // Include user detail from providers
      session.user.id = token.sub;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.picture;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
