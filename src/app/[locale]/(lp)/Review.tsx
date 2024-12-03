import Stars from "@/components/ui/Stars";
import { Stack, Typography } from "@mui/material";

const Review = ({
  comment,
  name,
  imgUrl,
}: {
  comment: string;
  name: string;
  imgUrl: string;
}) => {
  return (
    <Stack
      sx={{
        minWidth: 300,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "relative",
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        py: 2,
        px: 2,
        gap: 2,
        borderRadius: 2,
        width: 300,
        height: 300,
        overflow: "hidden",
        boxShadow: 4,
        ":hover": {
          boxShadow: 6,
          transform: "scale(1.03)",
          transition: "all 0.3s",
        },
      }}
    >
      {/* overlay */}
      <Stack
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明の黒
          zIndex: 1,
        }}
      />

      {/* Comment */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          {comment}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Review;
