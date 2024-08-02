import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Stars from "@/components/ui/Stars";
import { ReviewI } from "@/types/cafes";
import { space } from "@/utils/const";

const metaInfoStyle = {
  alignItems: "center",
  color: "custom.grey",
  position: "absolute" as "absolute", // 修正
  bottom: 20,
  left: 30,
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
    ml: index === 0 ? space.around : 0,
    mr: index === lastIndex ? space.around : 0,
    width: "743px",
    height: "300px",
    backgroundColor: "secondary.light",
    borderRadius: "10px",
    px: "30px",
    pt: "20px",
    pb: 20,
    position: "relative",
  };

  return (
    <Stack
      key={review.id}
      direction="row"
      sx={{ mr: index === lastIndex ? 0 : 3 }}
    >
      <Stack sx={reviewBoxStyle}>
        {/* Rate */}
        <Stars size="6" rate={review.rate} />

        {/* Title */}
        <Typography variant="h4" sx={{ mt: 1 }}>
          {review.title}
        </Typography>

        {/* Comment */}
        <Typography variant="body1" sx={{ my: 3 }}>
          {review.content}
        </Typography>

        {/* Meta */}
        <Stack direction="row" sx={metaInfoStyle}>
          {/* Profile Image */}
          <Image
            src={"/coffee.jpg"}
            alt="profile"
            width={40}
            height={40}
            style={{
              borderRadius: "50%",
            }}
          />

          {/* Name */}
          <Typography variant="body1" sx={{ ml: 1.5 }}>
            {review.user.username}
          </Typography>

          <Typography variant="body1" sx={{ mx: 1.5 }}>
            |
          </Typography>

          {/* Published At */}
          <Typography variant="body1" sx={{ mr: 1.5 }}>
            {review.user.updatedAt}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CafeDetailReviewCard;
