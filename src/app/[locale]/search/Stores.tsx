import { Grid } from "@mui/material";
import Store from "./Store";
import { StoreI } from "@/types/GooglePlacesTypes";

const Stores = ({
  stores,
  handleClickStore,
}: {
  stores: StoreI[];
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
      container
      spacing={1}
      sx={{
        overflow: "auto",
        width: "50%",
        py: 2,
        px: 1,
        backgroundColor: "secondary.light",
      }}
    >
      {stores?.map((store) => (
        <Store
          key={store.place_id}
          placeId={store.place_id}
          rating={store.rating}
          photoRef={store.photos?.[0]?.photo_reference}
          name={store.name}
          formatted_address={store.formatted_address}
          open_now={store.opening_hours?.open_now}
          handleClickStore={handleClickStore}
        />
      ))}
    </Grid>
  );
};

export default Stores;
