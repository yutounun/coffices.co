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
          mb: 4,
          px: { xs: mobile.space.aroundX, md: desktop.space.aroundX },
          backgroundColor: "secondary.main",
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
