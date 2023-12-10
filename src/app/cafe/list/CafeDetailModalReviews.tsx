import React from "react";
import { CafeI, ReviewI } from "types/cafes";
import Stars from "_commons/Stars";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import Image from "../../../../node_modules/next/image";

const CafeDetailModalReviews = ({ cafe }: { cafe: CafeI }) => {
  return (
    <Stack
      spacing={4}
      sx={{
        overflow: "auto",
        height: "70%",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {cafe.reviews.map((review: ReviewI) => (
        <Stack key={review.id} spacing={2}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1}>
              <Image src="/github.png" width="31" height="31" alt="image" />
              <Typography variant="h6">{review.title}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Stars rate={review.rate} />
              <Typography variant="body1">{review.rate}</Typography>
            </Stack>
          </Stack>
          <Typography variant="body1">{review.content}</Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          ></Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default CafeDetailModalReviews;
