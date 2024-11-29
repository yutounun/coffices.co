"use client";

import { useState, useEffect } from "react";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import GoogleMap from "@/components/ui/GoogleMap";
import Stores from "./CafeList";
import { searchCafeOnGoogle } from "@/utils/api";
import { CafeDetailI } from "@/types/GooglePlacesTypes";

interface StoresClientProps {
  initialCafes: CafeDetailI[];
  location?: string;
}

const StoresClient = ({ initialCafes, location }: StoresClientProps) => {
  const [cafes, setCafes] = useState(initialCafes);

  // Access the MUI theme
  const theme = useTheme();

  // Check if the screen size is below the `md` breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // If location is not provided, get user's location on client side
  useEffect(() => {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Retrieve cafes around user's location
          const cafesAround = await searchCafeOnGoogle(userLocation);

          setCafes(cafesAround);
        },
        (error) => {
          console.error("Error obtaining location:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else if (location) {
      searchCafeOnGoogle(null, location).then((cafes) => {
        setCafes(cafes);
      });
    }
  }, [location]);

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      sx={{
        height: { xs: "auto", md: "90vh" },
        width: "100%",
        mt: "10vh",
      }}
    >
      {/* 地図を最初に表示 (モバイルの場合) */}
      {isMobile && (
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 0,
            width: "100%",
          }}
        >
          <GoogleMap />
        </Box>
      )}
      {/* カフェリスト */}
      <Stores cafeList={cafes} location={location} />
      {/* 地図をリストの後に表示 (デスクトップの場合) */}
      {!isMobile && (
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 0,
            width: "100%",
          }}
        >
          <GoogleMap />
        </Box>
      )}
    </Stack>
  );
};

export default StoresClient;
