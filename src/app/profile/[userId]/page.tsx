import React from "react";
import Image from "../../../../node_modules/next/image";
import { Box, Stack } from "../../../../node_modules/@mui/material/index";
import ProfileDesc from "./ProfileDesc";

const Profile = () => {
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
          left: "43%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/github.png"
          alt="profile"
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
          }}
        />
      </Box>

      {/* Profile */}
      <ProfileDesc />
    </Stack>
  );
};

export default Profile;
