"use client";

import { useState } from "react";
import { photoUrl } from "@/libs/commons";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackButton from "./GoBack";
import { PlacePhotoI } from "@/types/GooglePlacesTypes";

const buttonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
  zIndex: 10,
};

const HeroImage = ({
  name,
  photos,
}: {
  name: string;
  photos: PlacePhotoI[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Max 5 photos
  const displayedPhotos = photos.slice(0, 5);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayedPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayedPhotos.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",
      }}
    >
      {/* Back Icon */}
      <BackButton />

      {/* Hero Image */}
      {displayedPhotos.length > 0 && (
        <Image
          src={
            process.env.NEXT_PUBLIC_SHOW_STORE_IMAGE_DETAIL === "true"
              ? photoUrl(displayedPhotos[currentIndex].photo_reference)
              : "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107"
          }
          alt={name || ""}
          fill
          style={{ objectFit: "cover" }}
        />
      )}

      <IconButton onClick={handlePrev} sx={{ ...buttonStyles, left: "10px" }}>
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton onClick={handleNext} sx={{ ...buttonStyles, right: "10px" }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HeroImage;
