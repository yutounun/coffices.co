"use client";
import React from "react";
import { AppBar, Toolbar, Stack } from "@mui/material";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";
import UserActions from "@/components/ui/UserActions";
import LanguageToggle from "@/components/ui/LanguageToggle";
import SearchBar from "@/app/cafe/list/SearchBar";
import { CafeListContext } from "@/contexts/CafeListContext";
import { filterCafe, fetchAllCafes } from "@/utils/api";
import { StationNameContext } from "@/contexts/StationNameContext";
import { desktop } from "@/utils/const";
import Link from "next/link";

const ResponsiveAppBar = () => {
  const { setCafeList } = React.useContext(CafeListContext);
  const { setStationName } = React.useContext(StationNameContext);

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
    <AppBar
      sx={{
        mb: 4,
        px: desktop.space.around,
        backgroundColor: "secondary.main",
      }}
    >
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
          <Link href="/cafe/list">
            <Image src="/logo/white.png" alt="logo" width={80} height={40} />
          </Link>
          <LanguageToggle sx={{ position: "static" }} />
          <NavBar />
          <SearchBar />
        </Stack>
        <Stack direction="row" sx={{ flexGrow: 0 }} spacing={2}>
          <UserActions />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
