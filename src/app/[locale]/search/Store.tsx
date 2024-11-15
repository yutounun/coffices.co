import useFetchCafeDetail from "@/hooks/useFetchCafeDetail";
import { photoUrl } from "@/libs/commons";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";
import Stars from "@/components/ui/Stars";

const Icon = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={15} height={15} />;
};

const Store = ({
  placeId,
  name,
  formatted_address,
  open_now,
  photoRef,
  rating,
  handleClickStore,
}: {
  placeId: string;
  name: string;
  formatted_address: string;
  open_now: boolean;
  photoRef?: string;
  handleClickStore: (
    placeId: string,
    name: string,
    formatted_address: string,
    open_now: boolean,
    rating?: number,
    photoRef?: string
  ) => void;
}) => {
  // const { detailInfo, loading } = useFetchCafeDetail(placeId);
  // if (loading) {
  //   return <Loading />;
  // }

  const showIcons = process.env.NEXT_PUBLIC_SHOW_DETAIL_INFO_ON_LIST;
  return (
    <Grid
      key={placeId}
      item
      xs={4}
      sx={{
        height: "auto",
        alignItems: "stretch",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
          transition: "transform 0.2s ease-in-out",
          zIndex: 1,
          backgroundColor: "#E7ECE7",
          borderRadius: "10px",
        },
      }}
      onClick={() =>
        handleClickStore(placeId, name, formatted_address, open_now, photoRef)
      }
    >
      <Link href={`/ja/search/${placeId}`}>
        <Stack sx={{ p: 1 }}>
          <Image
            src={
              process.env.NEXT_PUBLIC_SHOW_STORE_IMAGES_ON_LIST === "true"
                ? photoUrl(photoRef)
                : "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107"
            }
            alt="coffee"
            width={200}
            height={130}
            onError={(e) => (e.target.src = "/default-coffee-image.jpg")}
          />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">{name}</Typography>
            {/* <Typography variant="body1">{formatted_address}</Typography> */}
            <Stack direction="row" sx={{ alignItems: "center" }} gap={0.2}>
              <Stars rate={rating} size={{ xs: "small", md: "large" }} />
              {rating}
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center" }} gap={0.2}>
              {showIcons && (
                <Icon src="/landingpage/icons/wifi.svg" alt="wifi" />
              )}

              {showIcons && (
                <Icon src="/landingpage/icons/plug.svg" alt="plug" />
              )}

              {showIcons && (
                <Icon
                  src="/landingpage/icons/comfort.svg"
                  alt="work friendly"
                />
              )}

              {showIcons && (
                <Stack direction="row" sx={{ alignItems: "center" }} gap={0.1}>
                  <Icon src="/landingpage/icons/coffee.svg" alt="coffee" />
                  <Typography variant="body1">$2</Typography>
                </Stack>
              )}
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
