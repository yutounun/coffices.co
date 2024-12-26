"use client";

import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import GoogleMap from "@/components/ui/GoogleMap";
import Stores from "./CafeList";
import { searchCafeOnGoogle } from "@/utils/api";
import { CafeDetailI } from "@/types/GooglePlacesTypes";
import Loading from "../loading";

interface StoresClientProps {
  initialCafes: CafeDetailI[];
  location?: string;
}

const StoresClient = ({ initialCafes, location }: StoresClientProps) => {
  const [cafes, setCafes] = useState(initialCafes);

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

  if (cafes.length === 0) {
    return <Loading />;
  }

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        height: { xs: "auto", md: "90vh" },
        width: "100%",
        mt: "10vh",
      }}
    >
      {/* Display Map first on Mobile */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          flexGrow: 1,
          flexBasis: 0,
          width: "100%",
        }}
      >
        <GoogleMap />
      </Box>

      {/* Cafe List */}
      <Stores cafeList={cafes} location={location} />

      {/* Display map after the list on desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flexGrow: 1,
          flexBasis: 0,
          pr: "1%",
          pb: "1%",
        }}
      >
        <GoogleMap />
      </Box>
    </Stack>
  );
};

export default StoresClient;
