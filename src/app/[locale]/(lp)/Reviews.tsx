import Stars from "@/components/ui/Stars";
import { Container, Stack, Typography, Box } from "@mui/material";
import Review from "./Review";

const Reviews = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 5,
        py: 5,
        gap: 5,
      }}
    >
      <Typography variant="h2" textAlign={{ xs: "center", md: "left" }}>
        Users Voice
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto", // 横スクロールを有効化
          width: "100%", // 親要素に合わせた幅
          gap: 2,
          px: 2, // スクロール時の余白
          "&::-webkit-scrollbar": {
            display: "none", // スクロールバーを非表示（オプション）
          },
        }}
      >
        <Review
          comment="This app has completely transformed how I choose my work spots. The WiFi and outlet info is always accurate!"
          name="Anna, Freelancer"
          imgUrl="/landingpage/users/1.jpg"
        />
        <Review
          comment="I love how easy it is to find quiet cafes with this app. The recommendations are always spot on!"
          name="Sarah, Graphic Designer"
          imgUrl="/landingpage/users/2.jpg"
        />
        <Review
          comment="The detailed info about seating and power outlets is exactly what I needed. Highly recommend!"
          name="John, Software Engineer"
          imgUrl="/landingpage/users/3.jpg"
        />
        <Review
          comment="This app saves me so much time when looking for a productive workspace. Great tool for remote workers!"
          name="Emily, Digital Marketer"
          imgUrl="/landingpage/users/4.jpg"
        />
      </Box>
    </Container>
  );
};

export default Reviews;
