"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import CoffeeIcon from "@mui/icons-material/Coffee";
import useCreateModalStore from "../../store/openCreateCafeModal";
import { useRouter } from "../../../node_modules/next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import StationSearch from "(Header)/cafe/list/StationSearch";
import { CafeListContext } from "../../contexts/CafeListContext";
import { filterCafe } from "_utils/api";
import { StationNameContext } from "../../contexts/StationNameContext";

const pages = ["一覧", "作成"];

function ResponsiveAppBar() {
  const { setCafeList } = React.useContext(CafeListContext);
  const { setStationName } = React.useContext(StationNameContext);
  const router = useRouter();
  const { data: session } = useSession();
  const { openCreateCafeModal } = useCreateModalStore();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenProfile = (event: React.MouseEvent<HTMLElement>) => {
    router.push("/profile");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onClickListButton = () => {
    router.push("/cafe/list");
  };

  const onClickCreateButton = () => {
    openCreateCafeModal();
  };

  const onClickLogoutButton = () => {
    signOut({ callbackUrl: "/" });
  };

  function filterByStationName(filterParam?: string) {
    if (!filterParam) {
      // getCafeLocal();
    } else {
      filterCafe(filterParam).then((json) => setCafeList(json));
    }
    filterParam ? setStationName(filterParam) : setStationName("");
  }

  return (
    <AppBar sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CoffeeIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              mr: 2,
            }}
            onClick={onClickListButton}
          >
            coffices.co
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <CoffeeIcon sx={{ display: { xs: "flex", md: "none" } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            coffices.co
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Button
              key={pages[0]}
              onClick={onClickListButton}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              {pages[0]}
            </Button>
            <Button
              key={pages[1]}
              onClick={onClickCreateButton}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              {pages[1]}
            </Button>
            <StationSearch filterByStationName={filterByStationName} />
          </Box>

          <Stack direction="row" sx={{ flexGrow: 0 }} spacing={2}>
            <Button
              key={pages[1]}
              onClick={onClickLogoutButton}
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography sx={{ fontweight: 700, fontFamily: "monospace" }}>
                ログアウト
              </Typography>
            </Button>
            <IconButton onClick={handleOpenProfile} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src={session?.user?.image || "/coffee.jpg"}
              />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
