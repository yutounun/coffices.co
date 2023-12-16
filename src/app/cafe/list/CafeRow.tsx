import React from "react";
import { CafeI } from "types/cafes";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import CafeCard from "./CafeCard";

interface propTypes {
  cafes: CafeI[];
  area: string;
}

const CafeRow = ({ cafes, area }: propTypes) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          m: "1em",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {area}
      </Typography>
      <Stack direction="row" className="row__cards">
        {cafes &&
          cafes.length > 0 &&
          cafes.map((cafe) => <CafeCard key={cafe._id} cafe={cafe} />)}
      </Stack>
    </>
  );
};

export default CafeRow;
