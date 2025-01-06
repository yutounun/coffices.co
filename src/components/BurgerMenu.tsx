import { Box, Drawer, IconButton, Stack } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LanguageToggle from "@/components/ui/LanguageToggle";
import NavBar from "./ui/NavBar";
import SearchBar from "@/app/[locale]/search/SearchBar";

const BurgerMenu = ({
  isDrawerOpen,
  toggleDrawer,
}: {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        justifyContent: "flex-end",
      }}
    >
      {/* Burger Icon */}
      <IconButton edge="start" onClick={toggleDrawer} sx={{ ml: 2 }}>
        <MenuIcon />
      </IconButton>

      {/* Opened Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ width: 250 }}
      >
        <Box sx={{ width: 250, py: 2, px: 1 }}>
          <Stack direction="column" spacing={2} sx={{ p: 2 }}>
            <LanguageToggle onClose={toggleDrawer} />
            <NavBar onClose={toggleDrawer} />
            <SearchBar />
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default BurgerMenu;
