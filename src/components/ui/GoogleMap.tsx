"use client";

import { GoogleMapsEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { locationObjI } from "@/types/GooglePlacesTypes";
import { Box, Typography } from "@mui/material";

const GoogleMap = ({
  locationKeyword,
  currentLocation,
  clickedName,
}: {
  locationKeyword: string | null;
  currentLocation?: locationObjI;
  clickedName?: string;
}) => {
  // Production Mode
  if (process.env.NEXT_PUBLIC_SHOW_GOOGLE_MAP === "true") {
    if (clickedName) {
      return (
        <GoogleMapsEmbed
          loading="lazy"
          allowfullscreen={true}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          height={850}
          width="100%"
          mode="place"
          q={clickedName}
        />
      );
    } else {
      if (locationKeyword) {
        return (
          <GoogleMapsEmbed
            loading="lazy"
            allowfullscreen={true}
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            height={850}
            width="100%"
            mode="search"
            q={`coffee shops in ${locationKeyword}`}
          />
        );
      }
      return (
        <GoogleMapsEmbed
          loading="lazy"
          allowfullscreen={true}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          height={850}
          center={`${currentLocation?.lat},${currentLocation?.lng}`}
          zoom={"15"}
          width="100%"
          mode="search"
          q={`coffee shops `}
        />
      );
    }
  }

  // Dummy Mode
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src="/dummy/gmap.png"
        alt="coffee"
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default GoogleMap;
