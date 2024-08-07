// types/next-auth.d.ts
import NextAuth from "next-auth";

// デフォルトのNextAuthセッションにカスタムプロパティを追加
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // ここにカスタムプロパティを追加
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
