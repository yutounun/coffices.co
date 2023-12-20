import React from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CafeI } from "types/cafes";
import Stars from "_commons/Stars";

interface PropTypes {
  cafe: CafeI;
}

const CafeDescription = ({ cafe }: PropTypes) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      sx={{
        m: { xs: "10px", md: "10px" },
        position: { sx: "initial", md: "absolute" },
        top: { xs: "10px", md: "220px" },
      }}
      spacing={1}
    >
      <Typography
        variant="h5"
        sx={{
          mb: "4px",
          fontFamily: "monospace",
          fontWeight: 700,
        }}
      >
        {cafe.title}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {cafe.rate === 0 ? (
          <Typography variant="h6">評価なし</Typography>
        ) : (
          <>
            <Stars rate={cafe.rate} />
            <Typography variant="h6">{cafe.rate}</Typography>
          </>
        )}
      </Stack>
      {!isMobile && (
        <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
          {cafe.area}
        </Typography>
      )}
    </Stack>
  );
};

export default CafeDescription;
