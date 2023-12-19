"use client";
import React, { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useSession } from "next-auth/react";
import meStore from "../../../store/me";
import EditIcon from "@mui/icons-material/Edit";

const ProfileDesc = ({
  setShowModal,
}: {
  setShowModal: (showModal: boolean) => void;
}) => {
  const { data: session } = useSession();
  const { me } = meStore();

  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    if (me.bio && me.github && me.twitter && me.linkedIn && me.homepage) {
      setIsProfileComplete(true);
    }
  }, [me]);

  if (!isProfileComplete) return null;

  const userInfo = {
    name: session?.user?.name || "Unknown",
    email: session?.user?.email || "unknown@gmail.com",
    bio: me.bio,
    github: me.github || "https://github.com",
    twitter: me.twitter || "https://twitter.com",
    linkedin: me.linkedIn || "https://linkedin.com",
    homepage: me.homepage || "https://homepage.com",
  };
  return (
    <Stack
      sx={{
        alignItems: "center",
        width: "100%",
        minHeight: "55%",
        mt: { xs: 1, md: 2 },
        background: "#F6F6F6",
      }}
    >
      <Stack
        sx={{
          width: "45%",
          alignItems: "center",
          pt: { xs: 10, md: 15 },
        }}
        spacing={5}
      >
        <Stack direction="row" spacing={2}>
          <Typography fontWeight="bold" variant="h4">
            {userInfo.name}
          </Typography>
          {me.isAdmin && (
            <Button
              color="warning"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Admin
            </Button>
          )}
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="subtitle1">{userInfo.bio}</Typography>
          <EditIcon fontSize="small" onClick={() => setShowModal(true)} />
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={userInfo.github}>
            <GitHubIcon fontSize="large" />
          </Link>
          <Link href={userInfo.twitter}>
            <TwitterIcon color="info" fontSize="large" />
          </Link>
          <Link href={userInfo.linkedin}>
            <LinkedInIcon color="info" fontSize="large" />
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
