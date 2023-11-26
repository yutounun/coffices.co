import React from "react";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";

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
      <Typography variant="h6">★★★★ {cafe.rate}</Typography>
      <Typography variant="body1">{cafe.area}</Typography>
      {/* <Typography variant="body1">
        {cafe.openHour} ~ {cafe.closeHour}
      </Typography>
      <Typography variant="body1">Wifi {cafe.isWifi ? "○" : "×"}</Typography>
      <Typography variant="body1">電源 {cafe.isOutlet ? "○" : "×"}</Typography>
      <Typography variant="body1">喫煙 {cafe.isSmoking ? "○" : "×"}</Typography> */}
    </Stack>
  );
};

export default CafeDescription;
