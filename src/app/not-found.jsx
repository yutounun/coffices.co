import React from "react";
import { Stack, Typography } from "@mui/material";
import Header from "@/components/Header";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography
          sx={{
            color: "primary",
            fontSize: { xs: "14em", md: "50emm" },
            mt: { xs: 40, md: 20 },
            lineHeight: { xs: 1, md: 1 },
          }}
        >
          404
        </Typography>
        <Link href="/cafe/list">
          <Typography variant="h4">Go Back to List page</Typography>
        </Link>
      </Stack>
    </>
  );
};

export default NotFound;
