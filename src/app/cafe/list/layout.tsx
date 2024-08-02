"use client";

import Header from "@/components/Header";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/api";
import userStore from "@/store/me";
import { StationNameContext } from "@/contexts/StationNameContext";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, user } = userStore();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      // @ts-ignore
      getUser(session?.user?.id).then((user) => {
        setUser(user);
      });
    }
  }, [session]);
  const [stationName, setStationName] = useState("");

  return (
    <Stack>
      <StationNameContext.Provider value={{ stationName, setStationName }}>
        <Header />
        <Box sx={{ mt: "2em" }}>{children}</Box>
      </StationNameContext.Provider>
    </Stack>
  );
}
