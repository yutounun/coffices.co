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
import MenuIcon from "@mui/icons-material/Menu";
import CoffeeIcon from "@mui/icons-material/Coffee";
import useLangStore from "../../store/lang";
import useCreateModalStore from "../../store/openCreateCafeModal";

import { useRouter } from "../../../node_modules/next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import StationSearch from "(routes)/(Header)/cafe/list/StationSearch";
import { CafeListContext } from "../../contexts/CafeListContext";
import { filterCafe, getCafe } from "_utils/api";
import { StationNameContext } from "../../contexts/StationNameContext";
import useTranslate from "_custom/useTranslate";

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
  const { openCreateCafeModal } = useCreateModalStore();
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
    openCreateCafeModal();
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
      const cafeList = await getCafe();
      setCafeList(cafeList);
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
              <MenuItem onClick={onClickListButton}>
                <Typography textAlign="center">
                  {t?.header?.menus[0]}
                </Typography>
              </MenuItem>
              <MenuItem onClick={onClickCreateButton}>
                <Typography textAlign="center">
                  {t?.header?.menus[1]}
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                <Typography sx={{ letterSpacing: "0.3rem" }} textAlign="center">
                  {t?.header?.menus[2]}
                </Typography>
              </MenuItem>
              <MenuItem>
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
              </MenuItem>
            </Menu>
          </Box>

          <CoffeeIcon
            fontSize="small"
            sx={{ display: { xs: "flex", md: "none" } }}
          />
          <Typography
            variant="subtitle1"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
          </Typography>

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
              {t?.header?.menus[0]}
            </Button>

            {/* Create */}
            <Button
              key={t?.header?.menus[1]}
              onClick={onClickCreateButton}
              sx={jpMenuStyle}
            >
              {t?.header?.menus[1]}
            </Button>
            <StationSearch filterByStationName={filterByStationName} />
          </Box>

          <Stack direction="row" sx={{ flexGrow: 0 }} spacing={2}>
            <Button
              key={t?.header?.menus[1]}
              onClick={onClickLogoutButton}
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography sx={{ ...jpMenuStyle, letterSpacing: "0.1rem" }}>
                {t?.header?.menus[2]}
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
