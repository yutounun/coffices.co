import React, { useRef, useState } from "react";
import PanoramaIcon from "@mui/icons-material/Panorama";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { NextImage } from "../../_commons/NextImage";

const SelectImagePage = ({
  inputFileRef,
  getImageFile,
}: {
  inputFileRef: React.RefObject<HTMLInputElement>;
  getImageFile: () => void;
}) => {
  const [cafeImage, setCafeImage] = useState<string>("");

  function handleCafeImageInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    getImageFile();
    const file = event.target.files[0];
    setCafeImage(window.URL.createObjectURL(file));
  }

  return !!cafeImage ? (
    // Display the selected image
    <NextImage src={cafeImage} alt="cafe-image" />
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
      {/* <form onSubmit={handleCafeImageSubmit}> */}
      <Button component="label" variant="contained">
        コンピューターから選択
        <input
          ref={inputFileRef}
          onChange={handleCafeImageInput}
          type="file"
          hidden
        />
      </Button>
      {/* <button type="submit">登録</button> */}
      {/* </form> */}
    </Stack>
  );
};

export default SelectImagePage;
