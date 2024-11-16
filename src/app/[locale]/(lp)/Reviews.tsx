import Stars from "@/components/ui/Stars";
import { Stack, Typography } from "@mui/material";

const Reviews = () => {
  return (
    <Stack
      sx={{
        px: 10,
        py: 5,
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          px: 10,
          py: 5,
          gap: 2,
        }}
      >
        <Typography variant="h2">
          "This app boosted my productivity by 50%!"
        </Typography>
        <Stack direction="row" sx={{ gap: 2 }}>
          <Stack direction="row">
            <Stars size={{ xs: "small", md: "large" }} rate={5} />
          </Stack>
          <Typography variant="h4">Donald Trump</Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          px: 10,
          py: 5,
          gap: 2,
        }}
      >
        <Typography variant="h2">
          "This is one of the best app I have ever seen!"
        </Typography>
        <Stack direction="row" sx={{ gap: 2 }}>
          <Stack direction="row">
            <Stars size={{ xs: "small", md: "large" }} rate={4.5} />
          </Stack>
          <Typography variant="h4">J.Conner</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Reviews;
