"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Stack } from "@mui/material";
import ProfileDesc from "./ProfileDesc";
import { useSession } from "next-auth/react";
import ProfileEditModal from "./ProfileEditModal";

const ProfileContent = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  return (
    <Stack
      sx={{
        width: "100%",
        height: { xs: "94vh", md: "94vh" },
        position: "relative",
        background: "#F6F6F6",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          width: "100%",
          height: "45%",
          position: "relative",
          backgroundSize: "cover",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/background2.png')",
        }}
      />

      {/* Profile Image */}
      <Box
        sx={{
          top: "35%",
          left: "50%", // 親要素の中心に配置
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateX(-50%)", // 画像の幅の半分だけ左にずらす
        }}
      >
        <Box sx={{ display: { xs: "inline", md: "none" } }}>
          <Image
            src={session?.user?.image || "/coffee.jpg"}
            alt="profile"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>

        <Box sx={{ display: { xs: "none", md: "inline" } }}>
          <Image
            src={session?.user?.image || "/coffee.jpg"}
            alt="profile"
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>

      {/* Profile */}
      <ProfileDesc setShowModal={setShowModal} />
      <ProfileEditModal
        showModal={showModal}
        handleModalClose={() => setShowModal(false)}
      />
    </Stack>
  );
};

export default ProfileContent;
