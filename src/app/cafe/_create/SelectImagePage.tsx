import React, { useState } from "react";
import PanoramaIcon from "@mui/icons-material/Panorama";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { NextImage } from "../../_commons/NextImage";

const SelectImagePage = () => {
  const [profileImage, setProfileImage] = useState("");
  function handleFileInput(event: any) {
    if (!event.target.files) return;
    const file = event.target.files[0];
    setProfileImage(window.URL.createObjectURL(file));
  }
  return profileImage ? (
    <NextImage src={profileImage} alt="profile" />
  ) : (
    <Stack
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={1}
    >
      <Box>
        <PanoramaIcon sx={{ fontSize: 100, fontWeight: "thin" }} />
        <OndemandVideoIcon sx={{ fontSize: 100, fontWeight: 10 }} />
      </Box>
      <Typography variant="h6">
        ここに写真や画像をドラッグ(スキップ可能)
      </Typography>
      <Button component="label" variant="contained">
        コンピューターから選択
        <input type="file" hidden onChange={handleFileInput} />
      </Button>
    </Stack>
  );
};

export default SelectImagePage;
