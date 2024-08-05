import { CafeI } from "@/types/cafes";
import { Box, Stack, Typography } from "@mui/material";
import CafeCard from "./CafeCard";
import NotFound from "#/NotFound";
import { mobile, desktop } from "@/utils/const";

interface propTypes {
  cafes: CafeI[];
  q: string;
}

const CafeSearchResultList = ({ cafes, q }: propTypes) => {
  return (
    <Box
      sx={{
        px: { xs: mobile.space.around, md: desktop.space.around },
        py: { xs: 1, md: 3 },
      }}
    >
      {/* Search Keyword */}
      <Typography
        variant="h2"
        sx={{
          textDecoration: "none",
          color: "inherit",
          fontSize: { xs: "1.5em", md: "1.7em" },
        }}
      >
        {q}
      </Typography>

      {/* Card Grid */}
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {cafes &&
          cafes.length > 0 &&
          cafes.map((cafe) => (
            <CafeCard lastIndex={cafes.length - 1} key={cafe._id} cafe={cafe} />
          ))}

        {cafes.length === 0 && <NotFound />}
      </Stack>
    </Box>
  );
};

export default CafeSearchResultList;
