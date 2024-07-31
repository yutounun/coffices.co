import React from "react";
import { CafeI } from "@/types/cafes";
import { Box, Stack, Typography } from "@mui/material";
import CafeCard from "./CafeCard";
import Loading from "#/loading";
import NotFound from "#/NotFound";
import useMobile from "@/hooks/useMobile";

interface propTypes {
  cafes: CafeI[];
  area: string;
  isLoading?: boolean;
}

const CafeSearchResultList = ({ cafes, area, isLoading }: propTypes) => {
  const { isMobile } = useMobile();
  return (
    <Box sx={{ ml: 3, mt: 5 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          fontSize: { xs: "1.2rem", md: "2rem" },
        }}
      >
        {area}
      </Typography>
      <Stack
        sx={{
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {isLoading && <Loading />}
        {cafes &&
          cafes.length > 0 &&
          cafes.map((cafe) => <CafeCard key={cafe._id} cafe={cafe} />)}

        {cafes.length === 0 && <NotFound />}
      </Stack>
    </Box>
  );
};

export default CafeSearchResultList;
