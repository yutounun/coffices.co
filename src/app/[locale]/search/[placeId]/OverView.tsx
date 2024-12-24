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

      {/* Area */}
      <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
        <Typography variant="body1">{cafeDetail?.formatted_address}</Typography>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${cafeDetail?.name}`}
          target="_blank"
          style={{
            height: "20px",
            width: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src="/detail/map.svg" alt="map" width={20} height={20} />
        </Link>
      </Stack>

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
