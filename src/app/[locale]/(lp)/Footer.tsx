import { Stack, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Stack
      sx={{
        px: 4,
        py: 5,
        backgroundColor: "secondary.main",
        alignItems: "center",
        gap: 3,
      }}
    >
      {/* Logo */}
      <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
        CafeFinder
      </Typography>

      {/* Contact Information */}
      <Typography variant="body2" sx={{ color: "white" }}>
        Contact us at:{" "}
        <a
          href="mailto:support@cafefinder.com"
          style={{ color: "white", textDecoration: "underline" }}
        >
          support@cafefinder.com
        </a>
      </Typography>

      {/* Social Media Links */}
      <Stack direction="row" spacing={2}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
      </Stack>

      {/* Copyright */}
      <Typography variant="caption" sx={{ color: "white" }}>
        © {new Date().getFullYear()} CafeFinder. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
