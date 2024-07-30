"use client";
import React from "react";
import { AppBar, Container, Toolbar, Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";
import UserActions from "@/components/ui/UserActions";
import LanguageToggle from "@/components/ui/LanguageToggle";
import StationSearch from "#/cafe/list/StationSearch";
import { CafeListContext } from "@/contexts/CafeListContext";
import { filterCafe, getCafe } from "@/utils/api";
import { StationNameContext } from "@/contexts/StationNameContext";

const ResponsiveAppBar = () => {
  const { setCafeList } = React.useContext(CafeListContext);
  const { setStationName } = React.useContext(StationNameContext);
  const router = useRouter();
  const { data: session } = useSession();

  const filterByStationName = async (filterParam?: string) => {
    if (filterParam) {
      const filteredCafe = await filterCafe(filterParam);
      setCafeList(filteredCafe);
    } else {
      const cafeList = await getCafe();
      setCafeList(cafeList);
    }
    filterParam ? setStationName(filterParam) : setStationName("");
  };

  return (
    <AppBar sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Image src="/logo.svg" alt="logo" width="80" height="40" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Image src="/logo/logo.png" alt="logo" width={70} height={20} />
            <LanguageToggle sx={{ mx: 5, position: "static" }} />
            <NavBar />
            <StationSearch filterByStationName={filterByStationName} />
          </Box>
          <Stack direction="row" sx={{ flexGrow: 0 }} spacing={2}>
            <UserActions session={session} router={router} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
