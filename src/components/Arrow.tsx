import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Arrow = ({
  direction,
  onClick,
  hidden,
}: {
  direction: "left" | "right";
  onClick: () => void;
  hidden: boolean;
}) => {
  const isLeft = direction === "left";

  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: hidden ? "white" : "black",
        background: hidden ? "transparent" : "rgba(255, 255, 255, 0.7)",
        borderRadius: "50%",
        padding: "10px",
        transform: "translateY(-50%)",
        zIndex: 10,
        "&:hover": {
          backgroundColor: hidden ? "#/_F7F1E5" : "#A9A9A9",
          transition: "background-color 0.3s",
        },
        // 左側の矢印の場合は左に、そうでない場合は右に配置
        [isLeft ? "left" : "right"]: "10px",
      }}
    >
      {isLeft ? (
        <ArrowBackIosIcon
          sx={{
            color: hidden ? "#/_F7F1E5" : "black",
            ":&hover": {
              color: "#F7F1E5",
            },
            ml: 0.5,
          }}
        />
      ) : (
        <ArrowForwardIosIcon
          sx={{
            color: hidden ? "#/_F7F1E5" : "black",
            ":&hover": {
              color: "#F7F1E5",
            },
          }}
        />
      )}
    </IconButton>
  );
};
export default Arrow;
