import { AppBar, Container, Toolbar } from "@mui/material";
import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import HeaderContent from "./HeaderContent";

const ResponsiveAppBar = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "header")}>
      <AppBar
        sx={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))",

          backdropFilter: "blur(10px)",
          boxShadow: "none",
          height: { xs: 80, md: 80 },
          position: "fixed",
          transition: "background-color 0.3s, backdrop-filter 0.3s",
          top: 0,
          zIndex: 10,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HeaderContent />
          </Toolbar>
        </Container>
      </AppBar>
    </NextIntlClientProvider>
  );
};

export default ResponsiveAppBar;
