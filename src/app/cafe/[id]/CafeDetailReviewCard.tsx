import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Stars from "@/components/ui/Stars";
import { ReviewI } from "@/types/cafes";
import { mobile, desktop } from "@/utils/const";

const metaInfoStyle = {
  alignItems: "center",
  color: "custom.grey",
  position: "absolute",
  bottom: { xs: 10, md: 20 },
  left: { xs: 15, md: 26 },
  width: "calc(100% - 60px)", // Ensures the content fits within the box padding
};

const CafeDetailReviewCard = ({
  review,
  index,
  lastIndex,
}: {
  review: ReviewI;
  index: number;
  lastIndex: number;
}) => {
  const reviewBoxStyle = {
    position: "relative", // This makes the absolute positioning relative to this box
    ml:
      index === 0 ? { xs: mobile.space.aroundX, md: desktop.space.aroundX } : 0,
    mr:
      index === lastIndex
        ? { xs: mobile.space.aroundX, md: desktop.space.aroundX }
        : 0,
    width: { xs: "25em", md: "40em" },
    height: { xs: "30em", md: "20em" }, // Ensure the box has a defined height
    backgroundColor: "secondary.light",
    borderRadius: "10px",
    px: { xs: "1.4em", md: "30px" },
    pt: "20px",
    pb: 20,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Stack
      key={review.id}
      direction="row"
      sx={{ mr: index === lastIndex ? 0 : 3, height: "100%" }}
    >
      <Box sx={reviewBoxStyle}>
        <Box sx={{ flexGrow: 1 }}>
          {/* Rate */}
          <Stars size={{ xs: 16, md: 24 }} rate={review.rate} />

          {/* Title */}
          <Typography variant="h4" sx={{ mt: 1, wordWrap: "break-word" }}>
            {review.title}
          </Typography>

          {/* Comment */}
          <Typography
            variant="body1"
            sx={{ my: { xs: 1.4, md: 3 }, wordWrap: "break-word" }}
          >
            {review.content}
          </Typography>
        </Box>

        {/* Meta */}
        <Stack direction="row" sx={metaInfoStyle}>
          {/* Profile Image */}
          <Box
            sx={{
              width: { xs: 25, md: 40 },
              height: { xs: 25, md: 40 },
              position: "relative",
            }}
          >
            <Image
              src={"/coffee.jpg"}
              alt="profile"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Name */}
          <Typography
            variant="body1"
            sx={{ width: "auto", ml: { xs: 0.5, md: 1.5 } }}
          >
            {review?.user?.username}
          </Typography>

          <Typography
            variant="body1"
            sx={{ width: "auto", mx: { xs: 0.5, md: 1.5 } }}
          >
            |
          </Typography>

          {/* Published At */}
          <Typography
            variant="body1"
            sx={{ width: "auto", mr: { xs: 0.5, md: 1.5 } }}
          >
            {review?.user?.updatedAt}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CafeDetailReviewCard;
