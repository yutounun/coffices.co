import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Stars from "@/components/ui/Stars";
import CustomButton from "@/components/ui/CustomButton";
import { ReviewI } from "@/types/cafes";

const reviewBoxStyle = {
  width: "743px",
  height: "300px",
  backgroundColor: "secondary.light",
  borderRadius: "10px",
  px: "30px",
  py: "20px",
};

const CafeDetailReview = ({ reviews }: { reviews: ReviewI[] }) => {
  return (
    <Stack sx={{ my: 7 }}>
      {/* Title */}
      <Typography variant="h2" sx={{ mb: 3 }}>
        Review
      </Typography>

      {/* Review Box */}
      <Stack direction="row" sx={{ overflowX: "scroll", overflowY: "hidden" }}>
        {reviews.map((review: ReviewI) => (
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
                  Josh Kimich
                </Typography>

                <Typography variant="body1" sx={{ mx: 1.5 }}>
                  |
                </Typography>

                {/* Publised At */}
                <Typography variant="body1" sx={{ mr: 1.5 }}>
                  23, Jun, 2024
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <CustomButton>Leave a review</CustomButton>
    </Stack>
  );
};

export default CafeDetailReview;
