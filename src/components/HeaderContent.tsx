"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Stack, Drawer, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";
import UserActions from "@/components/ui/UserActions";
import LanguageToggle from "@/components/ui/LanguageToggle";
import SearchBar from "#/[locale]/cafe/list/SearchBar";
import Link from "next/link";

const HeaderContent = () => {
  const t = useTranslations("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
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
        <Link href="/cafe/list">
          <Image src="/logo/white.png" alt="logo" width={80} height={40} />
        </Link>

        {/* Burger Menu for xs */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            color="primary"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ width: 250 }}
          >
            <Box sx={{ width: 250, py: 2, px: 1 }}>
              <Stack direction="column" spacing={2} sx={{ p: 2 }}>
                <LanguageToggle onClose={closeDrawer} />
                <NavBar onClose={closeDrawer} />
                <SearchBar onClose={closeDrawer} />
              </Stack>
            </Box>
          </Drawer>
        </Box>

        {/* Language Switch, NavBar, Search for md */}
        <Stack
          direction="row"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <LanguageToggle />
          </Box>
          <NavBar />
          <SearchBar />
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ flexGrow: 0 }} spacing={2}>
        <UserActions />
      </Stack>
    </>
  );
};

export default HeaderContent;
