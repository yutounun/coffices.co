import { useMessages, NextIntlClientProvider } from "next-intl";
import pick from "lodash/pick";
import Header from "@/components/Header";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUser } from "@/utils/api";
import userStore from "@/store/me";
import { StationNameContext } from "@/contexts/StationNameContext";
import CafePostModal from "#/[locale]/cafe/_create/CafePostModal";
import { redirect } from "next/navigation";
import { CafeListContext } from "@/contexts/CafeListContext";
import { CafeI } from "@/types/cafes";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { setUser } = userStore();
  // const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     // @ts-ignore
  //     getUser(session?.user?.id).then((user) => {
  //       setUser(user);
  //     });
  //   }
  // }, [session]);

  // if (status === "unauthenticated") {
  //   redirect("/");
  // }

  // const [stationName, setStationName] = useState("");
  // const [cafeList, setCafeList] = useState<CafeI[]>([]);
  const messages = useMessages();

  return (
    <Stack>
      <Header />
      <Box
        sx={{
          backgroundColor: "primary.main",
          minHeight: "100vh",
        }}
      >
        <NextIntlClientProvider messages={pick(messages, "list")}>
          <Box sx={{ mt: "3em" }}>{children}</Box>
        </NextIntlClientProvider>

        {/* Post Modal */}
        <NextIntlClientProvider messages={pick(messages, "cafePostModal")}>
          <CafePostModal />
        </NextIntlClientProvider>
      </Box>
    </Stack>
  );
}
