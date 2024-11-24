import { Grid, Stack, Typography } from "@mui/material";
import Store from "./Store";
import { CafeDetailI } from "@/types/GooglePlacesTypes";

const CafeList = ({
  location,
  cafeList,
}: {
  location?: string;
  cafeList: CafeDetailI[];
}) => {
  return (
    <Stack
      sx={{
        overflow: "auto",
        width: "50%",
        py: 2,
        px: 1,
        backgroundColor: "secondary.light",
      }}
    >
      {/* Title */}
      <Typography variant="h3" sx={{ padding: "1em" }}>
        {location ? `Search results for "${location}"` : null}
      </Typography>

      <Grid container spacing={1}>
        {cafeList?.map((store) => (
          <Store
            key={store.place_id}
            placeId={store.place_id}
            rating={store.rating}
            useRatingsTotal={store.user_ratings_total}
            photoRef={store.photos?.[0]?.photo_reference}
            name={store.name}
            formatted_address={store.formatted_address}
            open_now={store.opening_hours?.open_now}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default CafeList;
