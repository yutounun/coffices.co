import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { NextImage } from "../../../_commons/NextImage";

const SelectImagePage = ({
  inputFileRef,
  getImageFile,
  imageUrl,
}: {
  inputFileRef: React.RefObject<HTMLInputElement>;
  getImageFile: () => void;
  imageUrl: string;
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
      <NextImage src={imageUrl ? imageUrl : "/coffee.jpg"} alt="image" />
      <Button component="label" variant="contained">
        コンピューターから選択
        <input
          ref={inputFileRef}
          onChange={handleCafeImageInput}
          type="file"
          hidden
        />
      </Button>
    </Stack>
  );
};

export default SelectImagePage;
