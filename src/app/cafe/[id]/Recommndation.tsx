import ScrollCardRow from "@/components/ui/ScrollCardRow";
import { CafeI } from "@/types/cafes";
import CafeCard from "#/cafe/list/CafeCard";
import { Typography } from "@mui/material";
import { mobile, desktop } from "@/utils/const";

const Recommndation = ({ cafes }: { cafes: CafeI[] }) => {
  return (
    <>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          mt: "1em",
          textDecoration: "none",
          color: "inherit",
          px: { xs: mobile.space.aroundX, md: desktop.space.aroundX },
        }}
      >
        You also might like...
      </Typography>

      <ScrollCardRow cardCount={cafes.length}>
        {cafes.map((cafe: CafeI, index: number) => (
          <CafeCard
            lastIndex={cafes.length - 1}
            index={index}
            key={cafe._id}
            cafe={cafe}
          />
        ))}
      </ScrollCardRow>
    </>
  );
};

export default Recommndation;
