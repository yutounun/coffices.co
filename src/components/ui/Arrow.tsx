import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const arrowStyle = {
  color: "black",
  ":&hover": {
    color: "#F7F1E5",
  },
};
const hiddenArrowStyle = {
  visibility: "hidden",
  pointerEvents: "none",
};

const Arrow = ({
  direction,
  onClickArrow,
  hidden,
}: {
  direction: "left" | "right";
  onClickArrow: () => void;
  hidden: boolean;
}) => {
  const isLeft = direction === "left";

  return (
    <IconButton
      onClick={onClickArrow}
      sx={{
        ...(hidden ? { pointerEvents: "none" } : {}),
      }}
    >
      {isLeft ? (
        // left arrow icon
        <ArrowBackIosIcon sx={hidden ? hiddenArrowStyle : arrowStyle} />
      ) : (
        // right arrow icon
        <ArrowForwardIosIcon sx={hidden ? hiddenArrowStyle : arrowStyle} />
      )}
    </IconButton>
  );
};
export default Arrow;
