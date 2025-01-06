import { Stack, Typography } from "@mui/material";

export function ReviewComment({
  name,
  comment
}: {
  name: string;
  comment: string;
}) {
  return (
    <Stack sx={{
      position: "relative",
      zIndex: 2,
      height: "100%",
      justifyContent: "space-between"
    }}>
      <Typography variant="body1" sx={{
        color: "white",
        fontWeight: "bold"
      }}>
        {name}
      </Typography>
      <Typography variant="body1" sx={{
        color: "white"
      }}>
        {comment}
      </Typography>
    </Stack>
  );
}
