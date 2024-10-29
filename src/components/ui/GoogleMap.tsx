"use client";

import { useTranslations } from "next-intl";
import { Box, Typography } from "@mui/material";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect } from "react";
import { searchCafeOnGoogle } from "@/utils/api";

const GoogleMap = ({ locationName }: { locationName: string }) => {
  // const t = useTranslations("detail");

  useEffect(() => {
    searchCafeOnGoogle(locationName);
  }, [locationName]);

  // if (process.env.NODE_ENV === "development")
  // return (
  //   <>
  //     <Typography variant="body1">{t("map.explanation")}</Typography>
  //     <Typography variant="body1">{t("map.check")} </Typography>
  //     <Link href="https://coffices-co.vercel.app/">
  //       <Typography
  //         variant="body1"
  //         sx={{
  //           "&:hover": {
  //             cursor: "pointer",
  //             color: "black",
  //           },
  //         }}
  //       >
  //         https://coffices-co.vercel.app/{" "}
  //       </Typography>
  //     </Link>
  //   </>
  // );
  return (
    // <GoogleMapsEmbed
    //   loading="lazy"
    //   allowfullscreen={true}
    //   apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    //   height={850}
    //   width="100%"
    //   mode="search"
    //   q={locationName}
    // />
    <Box>Fake Map Screen</Box>
  );
};

export default GoogleMap;
