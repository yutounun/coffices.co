"use client";
import { useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import {
  Stack,
  Drawer,
  IconButton,
  Box,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";
import UserActions from "@/components/ui/UserActions";
import LanguageToggle from "@/components/ui/LanguageToggle";
import SearchBar from "#/[locale]/search/SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderContent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

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
        <Link href="/">
          <Stack direction="row" alignItems="center">
            <Image src="/logo/new.png" alt="logo" width={80} height={80} />
            <Typography variant="h3" sx={{ color: "primary.500" }}>
              Coffice
            </Typography>
          </Stack>
        </Link>

        {/* Burger Menu for xs */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <IconButton edge="start" onClick={toggleDrawer(true)} sx={{ ml: 2 }}>
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
                <SearchBar />
              </Stack>
            </Box>
          </Drawer>
        </Box>
      </Stack>

      {/* Language Switch, NavBar, Search for md */}
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

          {/* <NavBar /> */}

          <SearchBar />
        </Stack>
        <UserActions />
      </Stack>
    </>
  );
};

export default HeaderContent;
