import React from "react";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import CafeCard from "./CafeCard";

const CafeRow = () => {
  return (
    <>
      <Typography variant="h5" sx={{ m: "10px" }}>
        恵比寿・中目黒エリア
      </Typography>
      <Stack direction="row" className="row__cards">
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
        <CafeCard />
      </Stack>
    </>
  );
};

export default CafeRow;
