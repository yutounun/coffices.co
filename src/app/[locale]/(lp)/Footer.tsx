import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        px: 10,
        py: 5,
        backgroundColor: "secondary.main",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          px: 10,
          py: 5,
          gap: 2,
          backgroundColor: "secondary.main",
        }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          Find your next cafe
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          Find your next cafe
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
