import React from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CafeI } from "_types/cafes";
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
        width: "100%",
      }}
      spacing={1}
    >
      <Typography
        variant="h5"
        sx={{
          mb: "4px",
          fontFamily: "monospace",
          fontSize: { xs: "1rem", md: "1.5rem" },
          fontWeight: { xs: "bold", md: "normal" },
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "90%",
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
          <Typography
            sx={{ fontSize: { xs: "1em", md: "1.3em" } }}
            variant="h6"
          >
            評価なし
          </Typography>
        ) : (
          <>
            <Stars rate={cafe.rate} />
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1em", md: "1.3em" } }}
            >
              {cafe.rate}
            </Typography>
          </>
        )}
      </Stack>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "monospace",
          fontSize: { xs: "1em", md: "1.3em" },
        }}
      >
        {cafe.station}
      </Typography>
    </Stack>
  );
};

export default CafeDescription;
