/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qa6tcgnajcglvnsr.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "profile.line-scdn.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
