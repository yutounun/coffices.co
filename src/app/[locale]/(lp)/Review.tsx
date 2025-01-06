import { ReviewComment } from './ReviewComment';
import { Stack, Typography } from "@mui/material";

function ReviewStyle(imgUrl: string) {
  return {
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
  }
}

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
}

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
      sx={ReviewStyle(imgUrl)}
    >
      {/* overlay */}
      <Stack
        sx={overlayStyle}
      />

      {/* Comment */}
      <ReviewComment name={name} comment={comment} />
    </Stack>
  );
};

export default Review;
