"use client";

import Header from "_commons/Header";
import { Box, Stack } from "../../../../node_modules/@mui/material/index";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { getUser } from "_utils/api";
import meStore from "../../../store/me";
import { QueryClient, QueryClientProvider } from "react-query";

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
  const queryClient = new QueryClient();

  return (
    <Stack>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Box sx={{ mt: "3em", width: "100%" }}>
          <Box sx={{ ml: "4rem", mt: "60px" }}>{children}</Box>;
        </Box>
      </QueryClientProvider>
    </Stack>
  );
}
