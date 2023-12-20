"use client";

import Header from "_commons/Header";
import { Box, Stack } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUser } from "_utils/api";
import meStore from "../../store/me";
import { QueryClient, QueryClientProvider } from "react-query";
import { StationNameContext } from "../../contexts/StationNameContext";
import CafePostModal from "./cafe/_create/CafePostModal";
import useCreateModalStore from "../../store/openCreateCafeModal";
import { useRouter } from "next/navigation";

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

  const queryClient = new QueryClient();
  const [stationName, setStationName] = useState("");

  return (
    <Stack>
      <StationNameContext.Provider value={{ stationName, setStationName }}>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ mt: "3em" }}>{children}</Box>
            {showsCreateModal && (
              <CafePostModal
                handleModalClose={closeCreateCafeModal}
                showModal={showsCreateModal}
              />
            )}
          </Box>
        </QueryClientProvider>
      </StationNameContext.Provider>
    </Stack>
  );
}
