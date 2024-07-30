"use client";

import Header from "@/components/Header";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/api";
import meStore from "@/store/me";
import { StationNameContext } from "@/contexts/StationNameContext";
import CafePostModal from "#/cafe/_create/CafePostModal";
import useCreateModalStore from "@/store/openCreateCafeModal";
import { useRouter } from "next/navigation";
import { CafeListContext } from "@/contexts/CafeListContext";
import { CafeI } from "@/types/cafes";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { setMe, me } = meStore();
  const { data: session, status } = useSession();
  const { showsCreateModal, closeCreateCafeModal } = useCreateModalStore();

  useEffect(() => {
    if (session) {
      // @ts-ignore
      getUser(session?.user?.id).then((user) => {
        setMe(user);
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
          <Box sx={{ width: "100%" }}>
            <Box sx={{ mt: "3em" }}>{children}</Box>
            {showsCreateModal && (
              <CafePostModal
                handleModalClose={closeCreateCafeModal}
                showModal={showsCreateModal}
              />
            )}
          </Box>
        </StationNameContext.Provider>
      </CafeListContext.Provider>
    </Stack>
  );
}
