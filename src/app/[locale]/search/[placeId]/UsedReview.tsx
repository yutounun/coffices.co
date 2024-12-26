import { Stack, Typography } from "@mui/material";

const UsedReview = ({ review, index }: { review: string; index: number }) => {
  return (
    <Stack
      key={index}
      direction="column"
      sx={{
        flex: "0 0 auto",
        px: 4,
        py: 2,
        backgroundColor: "white",
        minWidth: "200px",
        maxWidth: "300px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        height: "fit-content",
      }}
    >
      <Typography variant="body1" sx={{ whiteSpace: "normal" }}>
        {review}
      </Typography>
    </Stack>
  );
};

export default UsedReview;
