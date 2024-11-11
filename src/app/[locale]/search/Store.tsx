import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Store = ({
  name,
  formatted_address,
  open_now,
  photoRef,
  handleClickStore,
}: {
  name: string;
  formatted_address: string;
  open_now: boolean;
  photoRef?: string;
  handleClickStore: (
    name: string,
    formatted_address: string,
    open_now: boolean,
    photoRef?: string
  ) => void;
}) => {
  const photoUrl = (photoRef?: string) => {
    // console.log("🚀 ~ photoUrl ~ photoRef:", photoRef);
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY}`;
  };
  return (
    <Grid
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
        handleClickStore(name, formatted_address, open_now, photoRef)
      }
    >
      <Link href={`/ja/search/${name}`}>
        <Stack sx={{ alignItems: "center", p: 1 }}>
          <Image
            src={photoUrl(photoRef)}
            // src="https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107"
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
