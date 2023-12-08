import React from "react";
import { CafeI } from "types/cafes";
import { Typography } from "../../../../node_modules/@mui/material/index";

const CafeDetailModalReviews = ({ cafe }: { cafe: CafeI }) => {
  return (
    <>
      <Typography variant="h4">レビュー</Typography>
      <Typography>{cafe.id}</Typography>
    </>
  );
};

export default CafeDetailModalReviews;
