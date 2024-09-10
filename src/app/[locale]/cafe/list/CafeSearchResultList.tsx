"use client";

import { CafeI } from "@/types/cafes";
import { Box, Stack, Typography } from "@mui/material";
import CafeCard from "./CafeCard";
import { mobile, desktop } from "@/utils/const";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { useTranslations } from "next-intl";
import pick from "lodash/pick";
import { useMessages } from "next-intl";
import SearchNotFound from "@/app/[locale]/SearchNotFound";

interface propTypes {
  cafes: CafeI[];
  q: string;
}

const CafeSearchResultList = ({ cafes, q }: propTypes) => {
  const t = useTranslations("list");

  if (cafes?.length === 0) {
    return <SearchNotFound />;
  } else {
    return (
      <Box
        sx={{
          px: { xs: mobile.space.aroundX, md: desktop.space.aroundX },
          py: { xs: 8, md: 3 },
        }}
      >
        {/* Search Keyword */}
        <Typography
          variant="h2"
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {q}
        </Typography>

        {/* Card Grid */}
        <Stack
          sx={{
            flexDirection: { xs: "row", md: "row" },
            width: "100%",
            flexWrap: "wrap",
            gap: { xs: 1.4, md: 0 },
          }}
        >
          {cafes &&
            cafes?.length > 0 &&
            cafes?.map((cafe) => (
              <CafeCard
                lastIndex={cafes?.length - 1}
                key={cafe._id}
                cafe={cafe}
              />
            ))}

          {cafes?.length === 0 && notFound()}
        </Stack>
      </Box>
    );
  }
};

export default CafeSearchResultList;
