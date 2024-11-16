import Stars from "@/components/ui/Stars";
import { Stack, Typography } from "@mui/material";
import Review from "./Review";

const Reviews = () => {
  return (
    <Stack
      sx={{
        px: 10,
        py: 5,
      }}
    >
      <Review
        comment="This app has completely transformed how I choose my work spots. The
          WiFi and outlet info is always accurate!"
        name="Anna, Freelancer"
        rate={5}
      />

      <Review
        comment="I love the AI analysis feature—it saves me so much time by highlighting the most work-friendly options."
        name="Sarah, Graphic Designer"
        rate={5}
      />

      <Review
        comment="The app is user-friendly and easy to navigate. It's a game-changer for me!"
        name="John, Software Engineer"
        rate={5}
      />
    </Stack>
  );
};

export default Reviews;
