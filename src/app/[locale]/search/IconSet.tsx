import { CafeDetailI } from "@/types/CafeDetail";
import { Stack, Tooltip, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const IconWithCondition = ({
  title,
  iconSrc,
  condition,
  showQuestionMark,
  errorIconSrc,
}: {
  title: string;
  iconSrc: string;
  condition: boolean;
  showQuestionMark?: boolean;
  errorIconSrc?: string; // Error時に表示するアイコン
}) => (
  <Tooltip title={title}>
    <IconButton sx={{ p: "1px !important" }}>
      {!condition && errorIconSrc ? (
        <>
          <Image src={iconSrc} alt={title} width={15} height={15} />
          <Image src={errorIconSrc} alt="error" width={15} height={15} />
        </>
      ) : (
        <Image src={iconSrc} alt={title} width={15} height={15} />
      )}
      {!condition && !errorIconSrc && showQuestionMark && (
        <Typography
          component="span"
          sx={{
            fontSize: "0.7rem",
            color: "black",
            marginLeft: "4px",
            fontWeight: "bold",
          }}
        >
          ?
        </Typography>
      )}
    </IconButton>
  </Tooltip>
);

const IconSet = ({
  detailInfo,
  showIcons,
}: {
  detailInfo?: CafeDetailI;
  showIcons?: string;
}) => {
  const showQuestionMark = !showIcons || detailInfo?.error;

  return (
    <Stack direction="row" spacing={1}>
      {/* Gemini */}
      <IconWithCondition
        title="Analyzed by Gemini"
        iconSrc="/robot.svg"
        errorIconSrc="/error.svg"
        condition={!detailInfo?.error}
      />

      {/* WiFi */}
      <IconWithCondition
        title="WiFi"
        iconSrc="/landingpage/icons/wifi.svg"
        condition={
          !showQuestionMark && detailInfo?.wifi.wifi_available === "true"
        }
        showQuestionMark={showQuestionMark}
      />

      {/* Plug */}
      <IconWithCondition
        title="Plug"
        iconSrc="/landingpage/icons/plug.svg"
        condition={
          !showQuestionMark && detailInfo?.plug.plug_available === "true"
        }
        showQuestionMark={showQuestionMark}
      />

      {/* Work Friendly */}
      <IconWithCondition
        title="Work Friendly"
        iconSrc="/landingpage/icons/comfort.svg"
        condition={
          !showQuestionMark && detailInfo?.work.suitable_for_work === "true"
        }
        showQuestionMark={showQuestionMark}
      />

      {/* Coffee Price */}
      <Tooltip title="Min Coffee Price">
        <IconButton sx={{ p: "3px !important" }}>
          <Image
            src="/landingpage/icons/coffee.svg"
            alt="coffee price"
            width={15}
            height={15}
          />
          {(detailInfo?.error ||
            detailInfo?.coffee_price?.min_coffee_price === "not sure") && (
            <Typography
              component="span"
              sx={{
                fontSize: "0.7rem",
                color: "black",
                marginLeft: "4px",
                fontWeight: "bold",
              }}
            >
              ?
            </Typography>
          )}
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default IconSet;
