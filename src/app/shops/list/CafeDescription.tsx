import React from "react";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";
import { stars } from "./functions";
import Stars from "_commons/Stars";

interface PropTypes {
  cafe: CafeI;
}

const CafeDescription = ({ cafe }: PropTypes) => {
  return (
    <Stack
      sx={{
        m: "10px",
        position: "absolute",
        top: "220px",
      }}
      spacing={1}
    >
      <Typography variant="h5" sx={{ mb: "4px" }}>
        {cafe.title}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Stars rate={cafe.rate} />
        <Typography variant="h6">{cafe.rate}</Typography>
      </Stack>
      <Typography variant="body1">{cafe.area}</Typography>
    </Stack>
  );
};

export default CafeDescription;