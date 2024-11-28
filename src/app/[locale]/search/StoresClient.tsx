"use client";

import { useState, useEffect, use } from "react";
import { Box, Stack } from "@mui/material";
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
    <>
      <Stores cafeList={cafes} location={location} />

      {/* Map */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 0,
          width: "100%",
        }}
      >
        {/* <GoogleMap setCafeMapPlaceId={setCafeMapPlaceId} /> */}
        <GoogleMap />
      </Box>
    </>
  );
};

export default StoresClient;
