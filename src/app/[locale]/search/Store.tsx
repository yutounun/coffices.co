import { photoUrl } from "@/libs/commons";
import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Stars from "@/components/ui/Stars";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Store = ({
  placeId,
  name,
  formatted_address,
  open_now,
  photoRef,
  useRatingsTotal,
  rating,
}: {
  placeId: string;
  name: string;
  formatted_address: string;
  open_now?: boolean;
  photoRef?: string;
  useRatingsTotal?: number;
  rating?: number;
}) => {
  const showIcons = process.env.NEXT_PUBLIC_SHOW_DETAIL_INFO_ON_LIST;

  // Don't show the store if there is an error fetching the details

  return (
    <Grid
      key={placeId}
      item
      xs={12}
      sm={4}
      md={4}
      sx={{
        height: "auto",
        alignItems: "stretch",
        paddingLeft: "0 !important",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
          transition: "transform 0.2s ease-in-out",
          zIndex: 1,
          backgroundColor: "#E7ECE7",
          borderRadius: "10px",
        },
      }}
    >
      <Link href={`/ja/search/${placeId}`}>
        <Stack
          direction={{ xs: "row", md: "column" }}
          sx={{ p: 1, height: "auto" }}
        >
          <Stack
            sx={{
              position: "relative",
              width: { xs: "40%", md: "100%" },
              height: "120px",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_SHOW_STORE_IMAGES_ON_LIST === "true"
                  ? photoUrl(photoRef)
                  : "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107"
              }
              alt="coffee"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Stack>

          <Stack
            direction="row"
            sx={{
              p: { xs: 2, md: 1 },
              height: "auto",
              justifyContent: "between",
              alignItems: "center",
              width: { xs: "60%", md: "100%" },
            }}
          >
            <Stack sx={{ width: "100%" }}>
              <Typography variant="h5">{name}</Typography>
              <Stack direction="row" sx={{ alignItems: "center" }} gap={0.3}>
                {/* <Stars rate={rating || 0} size={{ xs: "small", md: "large" }} /> */}
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.1}
                  readOnly
                />
                <Typography variant="body1">{rating}</Typography>
                <Typography variant="body2">({useRatingsTotal})</Typography>
              </Stack>
              <Typography variant="body2">
                {`${formatted_address.split(",")[0]}, ${
                  formatted_address.split(",")[1]
                }`}
              </Typography>
            </Stack>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <ArrowForwardIosIcon />
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Grid>
  );
};

export default Store;
