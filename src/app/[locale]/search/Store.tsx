import { photoUrl } from "@/libs/commons";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Store = ({
  placeId,
  name,
  formatted_address,
  open_now,
  photoRef,
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
    photoRef?: string
  ) => void;
}) => {
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
        <Stack sx={{ alignItems: "center", p: 1 }}>
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
            <Typography variant="body1">{formatted_address}</Typography>
            <Typography variant="body1">
              open_now: {open_now ? "open" : "closed"}
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Grid>
  );
};

export default Store;
