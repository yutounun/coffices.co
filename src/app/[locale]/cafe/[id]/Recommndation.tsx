import ScrollCardRow from "@/components/ui/ScrollCardRow";
import { CafeI } from "@/types/cafes";
import CafeCard from "#/[locale]/cafe/list/CafeCard";
import { Typography } from "@mui/material";
import { mobile, desktop } from "@/utils/const";
import { useTranslations } from "next-intl";

const Recommndation = ({ cafes }: { cafes: CafeI[] }) => {
  const t = useTranslations("detail");
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
        {t("recommendation.title")}
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
