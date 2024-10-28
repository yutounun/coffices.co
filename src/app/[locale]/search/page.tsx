import GoogleMap from "@/components/ui/GoogleMap";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Stack direction="row" sx={{ height: "90vh", width: "100%" }}>
      <Grid
        container
        spacing={1}
        sx={{
          overflow: "auto",
          width: "40%",
          backgroundColor: "secondary.light",
        }}
      >
        <Grid item xs={4} sx={{ height: "auto", alignItems: "stretch" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto", alignItems: "stretch" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto", alignItems: "stretch" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: "auto" }}>
          <Image src="/coffee.jpg" alt="coffee" width={240} height={180} />
          <Stack sx={{ p: 1, height: "auto" }}>
            <Typography variant="h5">Starbucks</Typography>
            <Typography variant="body1">2022 Avenue</Typography>
            <Typography variant="body1">today - 5:30 ~ 19:00</Typography>
          </Stack>
        </Grid>
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
        <GoogleMap locationName="coffee shops" />
      </Box>
    </Stack>
  );
};

export default page;
