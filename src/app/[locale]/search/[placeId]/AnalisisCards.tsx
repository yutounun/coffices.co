import { CafeDetailI } from "@/types/cafe/detail";
import { Stack } from "@mui/material";
import AnalisisCard from "./AnalisisCard";

const AnalisisCards = ({ detailInfo }: { detailInfo?: CafeDetailI }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{ alignItems: "center", justifyContent: "center", my: 4 }}
    >
      {/* Wifi */}
      <AnalisisCard
        label={detailInfo?.wifi.wifi_available}
        confidence={detailInfo?.wifi.confidence}
        title="wifi"
        src="/landingpage/icons/wifi.svg"
        alt="wifi"
      />

      {/* Plug */}
      <AnalisisCard
        label={detailInfo?.plug.plug_available}
        confidence={detailInfo?.plug.confidence}
        title="plug"
        src="/landingpage/icons/plug.svg"
        alt="plug"
      />

      {/* Work Friendly */}
      <AnalisisCard
        label={detailInfo?.work.suitable_for_work}
        confidence={detailInfo?.work.confidence}
        title="work friendly"
        src="/landingpage/icons/comfort.svg"
        alt="work"
      />

      {/* Coffee */}
      <AnalisisCard
        label={detailInfo?.coffee_price.min_coffee_price}
        confidence={detailInfo?.coffee_price.confidence}
        title="coffee"
        src="/landingpage/icons/coffee.svg"
        alt="coffee"
      />
    </Stack>
  );
};

export default AnalisisCards;
