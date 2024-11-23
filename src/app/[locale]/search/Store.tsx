import { photoUrl } from "@/libs/commons";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Stars from "@/components/ui/Stars";
import IconSet from "./IconSet";
import useFetchCafeDetail from "@/hooks/useFetchCafeDetail";

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
  const { detailInfo, loading } = useFetchCafeDetail(placeId);

  const showIcons = process.env.NEXT_PUBLIC_SHOW_DETAIL_INFO_ON_LIST;

  // Don't show the store if there is an error fetching the details
  if (detailInfo?.error) return;

  return (
    <Grid
      key={placeId}
      item
      xs={4}
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
        <Stack sx={{ p: 1, height: "auto" }}>
          <Stack
            sx={{
              position: "relative",
              width: "100%",
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
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Stack>

          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">{name}</Typography>
            {/* <Typography variant="body1">{formatted_address}</Typography> */}
            <Stack direction="row" sx={{ alignItems: "center" }} gap={0.3}>
              <Stars rate={rating || 0} size={{ xs: "small", md: "large" }} />
              <Typography variant="body1">{rating}</Typography>
              <Typography variant="body2">({useRatingsTotal})</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", marginLeft: "-3px" }}
            >
              <IconSet detailInfo={detailInfo} showIcons={showIcons} />
            </Stack>
            {/* <Typography variant="body1">
              open_now: {open_now ? "open" : "closed"}
            </Typography> */}
          </Stack>
        </Stack>
      </Link>
    </Grid>
  );
};

export default Store;
