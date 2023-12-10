"use client";
import React from "react";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "../../../../node_modules/next/link";
import { useSession } from "next-auth/react";

const ProfileDesc = () => {
  const { data: session } = useSession();
  const userInfo = {
    name: session?.user.name,
    email: session?.user.email,
    bio: "Hi! I'm Yuto from Japan.I'm the one who launched this web service. Hopefully you can find thishelpful and useful. I also do enjoy crafting this web service.Therefore please feel free to leave your feedback.",
    github: "https://github.com/yutounun",
    twitter: "https://twitter.com/Robin_Ich_y",
    linkedin: "https://www.linkedin.com/in/yuto-ichihara-426800217/",
    homepage:
      "https://sophisticated-portfolio-2ihfqvxz4-yutounun.vercel.app/home",
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        width: "100%",
        minHeight: "55%",
        mt: 2,
        background: "#F6F6F6",
      }}
    >
      <Stack
        sx={{
          width: "45%",
          alignItems: "center",
          pt: 15,
        }}
        spacing={5}
      >
        <Typography fontWeight="bold" variant="h4">
          {userInfo.name}
        </Typography>
        <Typography variant="subtitle1">{userInfo.bio}</Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <Link href={userInfo.github}>
            <GitHubIcon fontSize="large" />
          </Link>
          <Link href={userInfo.twitter}>
            <TwitterIcon color="primary" fontSize="large" />
          </Link>
          <Link href={userInfo.linkedin}>
            <LinkedInIcon color="primary" fontSize="large" />
          </Link>
          <Link href={userInfo.homepage}>
            <LinkIcon fontSize="large" />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileDesc;
