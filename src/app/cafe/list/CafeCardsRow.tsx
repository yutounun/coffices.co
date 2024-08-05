import { CafeI } from "@/types/cafes";
import { Typography } from "@mui/material";
import CafeCard from "#/cafe/list/CafeCard";
import ScrollCardRow from "@/components/ui/ScrollCardRow";
import { desktop, mobile } from "@/utils/const";

interface propTypes {
  cafes: CafeI[];
  title: string;
  isTokyoRanking?: boolean;
}

const baseTypeStyle = {
  mt: 3,
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
          px: { xs: mobile.space.around, md: desktop.space.around },
          fontSize: { xs: "1.5em", md: "1.7em" },
        }}
      >
        {title}
      </Typography>

      {/* Default CardList */}
      <ScrollCardRow cardCount={cafes.length}>
        {cafes?.map((cafe, index) => (
          <CafeCard
            lastIndex={cafes.length - 1}
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
