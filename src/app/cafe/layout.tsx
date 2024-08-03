"use client";

import Header from "@/components/Header";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/api";
import userStore from "@/store/me";
import { StationNameContext } from "@/contexts/StationNameContext";
import CafePostModal from "#/cafe/_create/CafePostModal";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "next/navigation";
import { CafeListContext } from "@/contexts/CafeListContext";
import { CafeI } from "@/types/cafes";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { setUser } = userStore();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // @ts-ignore
      getUser(session?.user?.id).then((user) => {
        setUser(user);
      });
    }
  }, [session]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  const [stationName, setStationName] = useState("");
  const [cafeList, setCafeList] = useState<CafeI[]>([]);

  return (
    <Stack>
      <CafeListContext.Provider value={{ cafeList, setCafeList }}>
        <StationNameContext.Provider value={{ stationName, setStationName }}>
          <Header />
          <Box
            sx={{
              backgroundColor: "primary.main",
              minHeight: "100vh",
            }}
          >
            <Box sx={{ mt: "3em" }}>{children}</Box>

            {/* Post Modal */}
            <CafePostModal />
          </Box>
        </StationNameContext.Provider>
      </CafeListContext.Provider>
    </Stack>
  );
}
