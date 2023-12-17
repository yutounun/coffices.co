import React from "react";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";
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
      <Typography variant="h5" sx={{ mb: "4px", fontFamily: "monospace" }}>
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
      <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
        {cafe.area}
      </Typography>
    </Stack>
  );
};

export default CafeDescription;
