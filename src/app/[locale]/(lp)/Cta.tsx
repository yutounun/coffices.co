import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
export function Cta({ }) {
  return (
    <Link href="/en/search">
      <Button aria-label="cta-button" variant="contained" color="primary" sx={{
        boxShadow: 0,
        borderRadius: 10,
        ":hover": {
          boxShadow: 1,
          backgroundColor: "primary.300"
        }
      }}>
        Free Trial with Beta
      </Button>
    </Link>
  );
}
