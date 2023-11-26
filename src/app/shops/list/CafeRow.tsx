import React from "react";
import { CafeI } from "types/cafes";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import CafeCard from "./CafeCard";

interface propTypes {
  cafes: CafeI[];
}

const CafeRow = ({ cafes }: propTypes) => {
  return (
    <>
      <Typography variant="h5" sx={{ m: "10px" }}>
        恵比寿・中目黒エリア
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
