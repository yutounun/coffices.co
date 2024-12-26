import Stars from "@/components/ui/Stars";
import { CafeDetailI } from "@/types/GooglePlacesTypes";
import { Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const OverView = ({ cafeDetail }: { cafeDetail?: CafeDetailI }) => {
  console.log("🚀 ~ OverView ~ cafeDetail:", cafeDetail);
  return (
    <>
      {/* Title */}
      <Typography variant="h1">{cafeDetail?.name}</Typography>

      {/* Rating */}
      <Stack direction="row" gap={1}>
        <Rating
          name="half-rating-read"
          defaultValue={cafeDetail?.rating}
          precision={0.1}
          readOnly
        />
        <Typography variant="body1">{cafeDetail?.rating}</Typography>
        <Typography variant="body1">{`(${cafeDetail?.user_ratings_total})`}</Typography>
      </Stack>
    </>
  );
};

export default OverView;
