"use client";
import GoogleMap from "@/components/ui/GoogleMap";
import { searchCafeOnGoogle } from "@/utils/api";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  // const stores = await searchCafeOnGoogle("Vancouver");
  const [stores, setStores] = useState([]);
  useEffect(() => {
    // await実装
    searchCafeOnGoogle().then((data) => {
      setStores(data);
      console.log("🚀 ~ searchCafeOnGoogle ~ data:", data);
    });
  }, []);

  return (
    <Stack direction="row" sx={{ height: "90vh", width: "100%" }}>
      <Grid
        container
        spacing={1}
        sx={{
          overflow: "auto",
          width: "50%",
          pt: 2,
          py: 2,
          backgroundColor: "secondary.light",
        }}
      >
        {stores?.map((store) => (
          <Grid
            key={store.place_id}
            item
            xs={4}
            sx={{ height: "auto", alignItems: "stretch" }}
          >
            <Image src="/coffee.jpg" alt="coffee" width={240} height={130} />
            <Stack sx={{ p: 1, height: "auto" }}>
              <Typography variant="h5">
                {store.name}: {store.place_id}
              </Typography>
              <Typography variant="body1">{store.formatted_address}</Typography>
              <Typography variant="body1">
                opening_hours:{" "}
                {store.opening_hours.opening_hours ? "open" : "closed"}
              </Typography>
            </Stack>
          </Grid>
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
        <GoogleMap locationName="coffee shops in Vancouver" />
      </Box>
    </Stack>
  );
};

export default page;
