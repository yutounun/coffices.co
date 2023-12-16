"use client";
import React, { useState } from "react";
import Image from "../../../node_modules/next/image";
import { Box, Stack } from "../../../node_modules/@mui/material/index";
import ProfileDesc from "./ProfileDesc";
import { useSession } from "next-auth/react";
import ProfileEditModal from "./ProfileEditModal";
import meStore from "../../store/me";

const Profile = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
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
          top: "30%",
          left: "50%", // 親要素の中心に配置
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateX(-50%)", // 画像の幅の半分だけ左にずらす
        }}
      >
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

      {/* Profile */}
      <ProfileDesc setShowModal={setShowModal} />
      <ProfileEditModal
        showModal={showModal}
        handleModalClose={() => setShowModal(false)}
      />
    </Stack>
  );
};

export default Profile;
