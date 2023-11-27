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
      <Typography variant="h5" sx={{ m: "10px" }}>
        {area}
      </Typography>
      <Stack direction="row" className="row__cards">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </Stack>
    </>
  );
};

export default CafeRow;
