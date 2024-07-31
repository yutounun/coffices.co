"use client";
import React from "react";
import { AppBar, Container, Toolbar, Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";
import UserActions from "@/components/ui/UserActions";
import LanguageToggle from "@/components/ui/LanguageToggle";
import SearchBar from "@/app/cafe/list/SearchBar";
import { CafeListContext } from "@/contexts/CafeListContext";
import { filterCafe, fetchAllCafes } from "@/utils/api";
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
      const cafeList = await fetchAllCafes();
      setCafeList(cafeList);
    }
    filterParam ? setStationName(filterParam) : setStationName("");
  };

  return (
    <AppBar sx={{ mb: 4, px: 25, backgroundColor: "secondary.main" }}>
      <Toolbar disableGutters>
        <Stack
          direction="row"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Image src="/logo/white.png" alt="logo" width={80} height={40} />
          <LanguageToggle sx={{ position: "static" }} />
          <NavBar />
          <SearchBar filterByStationName={filterByStationName} />
        </Stack>
        <Stack direction="row" sx={{ flexGrow: 0 }} spacing={2}>
          <UserActions />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
