import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Stars from "@/components/ui/Stars";
import { ReviewI } from "@/types/cafes";

const CafeDetailReviewCard = ({
  review,
  index,
}: {
  review: ReviewI;
  index: number;
}) => {
  const reviewBoxStyle = {
    ml: index === 0 ? 25 : 0,
    width: "743px",
    height: "300px",
    backgroundColor: "secondary.light",
    borderRadius: "10px",
    px: "30px",
    py: "20px",
  };

  return (
    <Stack key={review.id} direction="row" sx={{ mr: 3 }}>
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
        <Stack
          direction="row"
          sx={{ alignItems: "center", color: "custom.grey" }}
        >
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
            Josh Micheal
          </Typography>

          <Typography variant="body1" sx={{ mx: 1.5 }}>
            |
          </Typography>

          {/* Published At */}
          <Typography variant="body1" sx={{ mr: 1.5 }}>
            2022.03.22
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CafeDetailReviewCard;
