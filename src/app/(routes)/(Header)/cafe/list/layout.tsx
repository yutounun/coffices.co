"use client";

import Header from "_commons/Header";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUser } from "_utils/api";
import meStore from "../../../../../store/me";
import { StationNameContext } from "../../../../../contexts/StationNameContext";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setMe, me } = meStore();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      // @ts-ignore
      getUser(session?.user?.id).then((user) => {
        setMe(user);
      });
    }
  }, [session]);
  const [stationName, setStationName] = useState("");

  return (
    <Stack>
      <StationNameContext.Provider value={{ stationName, setStationName }}>
        <Header />
        <Box sx={{ ml: { xs: "0", md: "4rem" }, mt: "2em" }}>{children}</Box>
      </StationNameContext.Provider>
    </Stack>
  );
}
