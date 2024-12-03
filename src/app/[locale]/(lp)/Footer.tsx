import { footerItems } from "@/const/footer";
import { Container, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        px: 4,
        py: 10,
        gap: { xs: 5, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {footerItems.map((item) => (
        <Stack
          key={item.heading}
          direction="column"
          sx={{ color: "neutral.400" }}
          gap={2}
        >
          <Typography variant="h4">{item.heading}</Typography>
          <Stack>
            {item.titles.map((title) => (
              <Typography
                key={title.title}
                variant="body1"
                sx={{ color: "neutral.900" }}
              >
                {title.title}
              </Typography>
            ))}
          </Stack>
        </Stack>
      ))}
    </Container>
  );
};

export default Footer;
