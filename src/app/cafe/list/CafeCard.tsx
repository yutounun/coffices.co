"use client";
import "@/styles/cafe-list.scss";
import { Box, Typography, Stack } from "@mui/material";
import { CafeI } from "@/types/cafes";
import CafeDescription from "#/cafe/list/CafeDescription";
import { NextImage } from "@/components/ui/NextImage";
import Card from "@mui/material/Card";
import { useRouter } from "next/navigation";

interface propTypes {
  cafe: CafeI;
  rank?: number;
  isTokyoRanking?: boolean;
  index: number;
}

const rankStyle = {
  color: "custom.darkGray",
  fontSize: { sm: "10em", md: "16em" },
  letterSpacing: "-20px",
  mr: { sm: 0, md: -1 },
  ml: 0,
};

const cardPhotoStyle = { height: { xs: "100px", md: "150px" }, width: "100%" };

const CafeCard = ({ cafe, rank, isTokyoRanking, index }: propTypes) => {
  const router = useRouter();

  const cardStyle = {
    width: { xs: "12em", md: "250px" },
    mt: "2em",
    mr: "2em",
    ml: index === 0 && !isTokyoRanking ? 25 : "0px",
    position: "relative",
    overflow: "visible",
    height: { xs: "13em", md: "270px" },
    borderRadius: "20px",
  };

  /**
   * open cafe detail
   */
  function onClickCafeCard() {
    router.push(`${cafe._id}`);
  }

  return (
    <>
      <Stack
        sx={{
          "&:hover": {
            scale: "1.1",
            transition: "all 0.5s ease",
            cursor: "pointer",
          },
          ml: index === 0 && isTokyoRanking ? 22 : "0px",
        }}
        direction="row"
      >
        {/* Ranking Number */}
        {isTokyoRanking && <Typography sx={rankStyle}>{rank}</Typography>}

        {/* Card */}
        <Card sx={cardStyle} onClick={onClickCafeCard}>
          {/* Cafe Photo */}
          <Box sx={cardPhotoStyle}>
            <NextImage
              className="row__picture"
              src={cafe.image ? cafe.image : "/coffee.jpg"}
              alt="cafe1"
            />
          </Box>
          {/* Cafe Description */}
          <CafeDescription cafe={cafe} />
        </Card>
      </Stack>
    </>
  );
};

export default CafeCard;
