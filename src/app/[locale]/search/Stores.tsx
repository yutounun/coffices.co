import { Grid, Stack, Typography } from "@mui/material";
import Store from "./Store";
import { CafeDetailI } from "@/types/GooglePlacesTypes";
import useSearchKeywordStore from "@/store/searchKeywordStore";

const Stores = ({
  stores,
  handleClickStore,
}: {
  stores: CafeDetailI[];
  handleClickStore: (
    placeId: string,
    name: string,
    formatted_address: string,
    open_now?: boolean,
    photoRef?: string
  ) => void;
}) => {
  const searchKeyword = useSearchKeywordStore((state) => state.searchKeyword);
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
        {searchKeyword
          ? `Search results for "${searchKeyword}"`
          : "Search results"}
      </Typography>

      <Grid container spacing={1}>
        {stores?.map((store) => (
          <Store
            key={store.place_id}
            placeId={store.place_id}
            rating={store.rating}
            useRatingsTotal={store.user_ratings_total}
            photoRef={store.photos?.[0]?.photo_reference}
            name={store.name}
            formatted_address={store.formatted_address}
            open_now={store.opening_hours?.open_now}
            handleClickStore={handleClickStore}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default Stores;
