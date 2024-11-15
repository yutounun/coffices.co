"use client";
import GoogleMap from "@/components/ui/GoogleMap";
import { Box, Stack } from "@mui/material";
import Stores from "./Stores";
import useFetchCafeList from "@/hooks/useFetchCafeList";
import Loading from "../loading";

const Search = () => {
  const {
    stores,
    currentLocationMap,
    location,
    clickedName,
    handleClickStore,
    loading,
  } = useFetchCafeList();

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack direction="row" sx={{ height: "90vh", width: "100%" }}>
      {/* Stores */}
      <Stores stores={stores} handleClickStore={handleClickStore} />

      {/* Map */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 0,
          width: "100%",
        }}
      >
        <GoogleMap
          clickedName={clickedName}
          locationKeyword={location}
          currentLocation={currentLocationMap}
        />
      </Box>
    </Stack>
  );
};

export default Search;
