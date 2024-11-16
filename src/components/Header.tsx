// Server Component
import { AppBar, Toolbar } from "@mui/material";
import { mobile, desktop } from "@/utils/const";
import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import HeaderContent from "./HeaderContent";

const ResponsiveAppBar = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "header")}>
      <AppBar
        sx={{
          backgroundColor: "#161422",
          px: { xs: 4, md: 16 },
          height: "10vh !important",
        }}
      >
        <Toolbar disableGutters>
          <HeaderContent />
        </Toolbar>
      </AppBar>
    </NextIntlClientProvider>
  );
};

export default ResponsiveAppBar;
