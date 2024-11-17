"use client";

import { Box } from "@mui/material";

const GoogleMap = ({
  locationKeyword,
  clickedName,
}: {
  locationKeyword?: string | null;
  clickedName?: string;
}) => {
  const mapQuery = clickedName
    ? `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
        clickedName
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    : `https://www.google.com/maps/embed/v1/search?q=${encodeURIComponent(
        `coffee shops in ${locationKeyword || "current location"}`
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "100%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={mapQuery}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </Box>
  );
};

export default GoogleMap;
