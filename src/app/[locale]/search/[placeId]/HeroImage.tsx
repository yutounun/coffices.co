"use client";

import { photoUrl } from "@/libs/commons";
import useSelectedStoreStore, { selectedStoreI } from "@/store/selectedStore";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ZustandTracker } from "zustand-tracker";
// import ZustandTracker from "./ZustandTracker";

const HeroImage = ({
  selectedStoreData,
}: {
  selectedStoreData?: selectedStoreI;
}) => {
  const router = useRouter();

  const selectedStoreDataStore = useSelectedStoreStore(
    (state) => state.selectedStoreData
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "200px",
        overflow: "hidden",
      }}
    >
      <ZustandTracker
        stores={{
          selectedStoreDataStore: selectedStoreDataStore,
        }}
      />
      {/* Back Icon */}
      <IconButton
        onClick={() => router.back()}
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Hero Image */}
      <Image
        src={
          process.env.NEXT_PUBLIC_SHOW_STORE_IMAGE_DETAIL === "true"
            ? photoUrl(selectedStoreData?.photoRef)
            : "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107"
        }
        alt={selectedStoreData?.name || ""}
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default HeroImage;
