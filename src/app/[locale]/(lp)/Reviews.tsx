import Stars from "@/components/ui/Stars";
import { Container, Stack, Typography } from "@mui/material";
import Review from "./Review";

const Reviews = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 10,
        py: 5,
        gap: 5,
      }}
    >
      <Typography variant="h2">Users Voice</Typography>

      <Stack direction="row" gap={2} sx={{ justifyContent: "center" }}>
        <Review
          comment="This app has completely transformed how I choose my work spots. The WiFi and outlet info is always accurate!"
          name="Anna, Freelancer"
          imgUrl="/landingpage/users/1.jpg"
        />

        <Review
          comment="This app has completely transformed how I choose my work spots. The WiFi and outlet info is always accurate!"
          name="Sarah, Graphic Designer"
          imgUrl="/landingpage/users/2.jpg"
        />

        <Review
          comment="This app has completely transformed how I choose my work spots. The WiFi and outlet info is always accurate!"
          name="John, Software Engineer"
          imgUrl="/landingpage/users/3.jpg"
        />

        <Review
          comment="This app has completely transformed how I choose my work spots. The WiFi and outlet info is always accurate!"
          name="John, Software Engineer"
          imgUrl="/landingpage/users/4.jpg"
        />
      </Stack>
    </Container>
  );
};

export default Reviews;
