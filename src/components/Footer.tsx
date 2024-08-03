import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import useLangStore from "@/store/lang";
import useCafeModalStore from "@/store/openCafeModal";
import { useRouter } from "$/node_modules/next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import SearchBar from "@/app/cafe/list/SearchBar";
import { CafeListContext } from "@/contexts/CafeListContext";
import { filterCafe, fetchAllCafes } from "@/utils/api";
import { StationNameContext } from "@/contexts/StationNameContext";
import useTranslate from "@/hooks/useTranslate";
import Image from "next/image";

const baseMenuStyle = {
  my: 2,
  color: "white",
  display: "block",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
};
const jpMenuStyle = {
  ...baseMenuStyle,
};

function ResponsiveAppBar() {
  const { setCafeList } = React.useContext(CafeListContext);
  const { setStationName } = React.useContext(StationNameContext);
  const router = useRouter();
  const { data: session } = useSession();
  const { openCafeModal } = useCafeModalStore();
  const { lang, changeToJp, changeToEng } = useLangStore();
  const { t } = useTranslate();

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
    handleCloseNavMenu();
    router.push("/cafe/list");
  };

  const onClickCreateButton = () => {
    handleCloseNavMenu();
    openCafeModal();
  };

  const onClickLogoutButton = () => {
    handleCloseNavMenu();
    signOut({ callbackUrl: "/" });
  };

  async function filterByStationName(filterParam?: string) {
    if (filterParam) {
      const filteredCafe = await filterCafe(filterParam);
      setCafeList(filteredCafe);
    } else {
      const cafeList = await fetchAllCafes();
      setCafeList(cafeList);
    }
    filterParam ? setStationName(filterParam) : setStationName("");
  }

  return (
    <AppBar sx={{ mb: 4 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="/logo.svg" alt="logo" width="80" height={"40"} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
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
              {/* <MenuItem onClick={onClickListButton}>
                <Typography textAlign="center">
                  {t?.header?.menus[0]}
                </Typography>
              </MenuItem>
              <MenuItem onClick={onClickCreateButton}>
                <Typography textAlign="center">
                  {t?.header?.menus.post}
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                <Typography sx={{ letterSpacing: "0.3rem" }} textAlign="center">
                  {t?.header?.menus.signout}
                </Typography>
              </MenuItem> */}
              {/* <MenuItem>
                {lang === "jp" ? (
                  <Typography
                    sx={{ letterSpacing: "0.3rem" }}
                    textAlign="center"
                    onClick={changeToEng}
                  >
                    {t?.common.en}
                  </Typography>
                ) : (
                  <Typography
                    sx={{ letterSpacing: "0.3rem" }}
                    textAlign="center"
                    onClick={changeToJp}
                  >
                    {t?.common.jp}
                  </Typography>
                )}
              </MenuItem> */}
            </Menu>
          </Box>

          {/* <CoffeeIcon
            fontSize="small"
            sx={{ display: { xs: "flex", md: "none" } }}
          />
          <Typography
            variant="subtitle1"
            noWrap
            component="a"
            href="#/_app-bar-with-responsive-menu"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,

              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {t?.common.appName}
          </Typography> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {lang === "jp" ? (
              <Button sx={jpMenuStyle} onClick={changeToEng}>
                {t?.common.en}
              </Button>
            ) : (
              <Button sx={jpMenuStyle} onClick={changeToJp}>
                {t?.common.jp}
              </Button>
            )}

            {/* List */}
            <Button
              key={t?.header?.menus[0]}
              onClick={onClickListButton}
              sx={jpMenuStyle}
            >
              {t?.header?.menus.list}
            </Button>

            {/* Create */}
            <Button
              key={t?.header?.post}
              onClick={onClickCreateButton}
              sx={jpMenuStyle}
            >
              {t?.header?.menus.post}
            </Button>
            <SearchBar filterByStationName={filterByStationName} />
          </Box>

          <Stack direction="row" sx={{ flexGrow: 0 }} spacing={2}>
            <Button
              key={t?.header?.menus.post}
              onClick={onClickLogoutButton}
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography sx={{ ...jpMenuStyle, letterSpacing: "0.1rem" }}>
                {t?.header?.menus.signout}
              </Typography>
            </Button>
            <IconButton onClick={handleOpenProfile} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src={session?.user?.image || "/coffee.jpg"}
                sx={{ width: { xs: 28, md: 38 }, height: { xs: 28, md: 38 } }}
              />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
