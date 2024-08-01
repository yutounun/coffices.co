import { CafeI } from "@/types/cafes";
import { Typography } from "@mui/material";
import CafeCard from "#/cafe/list/CafeCard";
import ScrollCardRow from "@/components/ui/ScrollCardRow";

interface propTypes {
  cafes: CafeI[];
  title: string;
  isTokyoRanking?: boolean;
}

const baseTypeStyle = {
  mt: "1em",
  textDecoration: "none",
};

const CafeCardRow = ({ cafes, title, isTokyoRanking }: propTypes) => {
  return (
    <>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          ...baseTypeStyle,
          color: "inherit",
          px: 25,
          fontSize: { xs: "1.5em", md: "1.7em" },
        }}
      >
        {title}
      </Typography>

      {/* Default CardList */}
      <ScrollCardRow cardCount={cafes.length}>
        {cafes?.map((cafe, index) => (
          <CafeCard
            isTokyoRanking={isTokyoRanking}
            key={cafe._id}
            rank={index + 1}
            cafe={cafe}
            index={index}
          />
        ))}
      </ScrollCardRow>
    </>
  );
};

export default CafeCardRow;
