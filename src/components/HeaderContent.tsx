"use client";
import { useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Stack, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import SearchBar from "#/[locale]/search/SearchBar";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const HeaderContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Logo */}
        <Stack direction="row" alignItems="center">
          <Link href="/">
            <Image
              src="/logo/coffices.png"
              alt="logo"
              width={100}
              height={40}
            />
          </Link>
        </Stack>

        {/* Burger Menu for xs */}
        <BurgerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </Stack>

      {/* Language Switch, NavBar, Search for md+ */}
      <Stack direction="row" sx={{ flexGrow: 0, alignItems: "center" }} gap={2}>
        <Stack
          direction="row"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Tooltip title="Search Nearby">
            <IconButton href="/en/search">
              <MyLocationIcon fontSize="small" sx={{ color: "neutral.700" }} />
            </IconButton>
          </Tooltip>
          <SearchBar />
        </Stack>
        {/* <UserActions /> */}
      </Stack>
    </>
  );
};

export default HeaderContent;
