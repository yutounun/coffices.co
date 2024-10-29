"use client";
import GoogleMap from "@/components/ui/GoogleMap";
import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Store from "./Store";
import { dummyStores, StoreI } from "@/types/GooglePlacesTypes";
import { searchCafeOnGoogle } from "@/utils/api";

const Search = () => {
  const [stores, setStores] = useState<StoreI[]>([]);
  const [clickedName, setClickedName] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchStores = async () => {
      // const data = await searchCafeOnGoogle();
      const data = dummyStores;
      setStores(data);
    };
    fetchStores();
  }, []);

  function handleClickStore(name: string) {
    setClickedName(name);
  }

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ navigator:", navigator);
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });

          console.log({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    }
  }, []);

  return (
    <Stack direction="row" sx={{ height: "90vh", width: "100%" }}>
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
            photoRef={store.photos?.[0]?.photo_reference}
            name={store.name}
            formatted_address={store.formatted_address}
            open_now={store.opening_hours?.open_now}
            handleClickStore={handleClickStore}
          />
        ))}
      </Grid>

      {/* Map */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 0,
          height: "100vh",
          width: "100%",
        }}
      >
        {/* TODO:LocationNameに現在地を入れる */}
        <GoogleMap clickedName={clickedName} locationName={currentLocation} />
      </Box>
    </Stack>
  );
};

export default Search;
