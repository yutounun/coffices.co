import React from "react";
import { CafeI } from "types/cafes";
import { Stack, Typography } from "@mui/material";
import CafeCard from "./CafeCard";
import Loading from "../../../loading";
import NotFound from "../../../NotFound";

interface propTypes {
  cafes: CafeI[];
  area: string;
  isLoading?: boolean;
}

const CafeSearchList = ({ cafes, area, isLoading }: propTypes) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {area}
      </Typography>
      <Stack direction="row" sx={{ width: "100%", flexWrap: "wrap" }}>
        {isLoading && <Loading />}
        {cafes &&
          cafes.length > 0 &&
          cafes.map((cafe) => <CafeCard key={cafe._id} cafe={cafe} />)}

        {cafes.length === 0 && <NotFound />}
      </Stack>
    </>
  );
};

export default CafeSearchList;
