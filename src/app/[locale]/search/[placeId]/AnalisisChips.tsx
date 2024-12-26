import { CafeAnalysisI } from "@/types/CafeAnalysis";
import { Chip, Stack } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";

const CustomChip = ({
  label,
  icon,
  condition,
}: {
  label: string;
  icon: any;
  condition: boolean;
}) => {
  return (
    <Chip icon={icon} label={label} color={condition ? "primary" : "default"} />
  );
};

const AnalisisCards = ({ detailInfo }: { detailInfo?: CafeAnalysisI }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{
        alignItems: "center",
        maxWidth: "100%",
        overflowX: "scroll",
      }}
    >
      <CustomChip
        label="wifi"
        icon={<WifiIcon />}
        condition={JSON.parse(detailInfo?.wifi.wifi_available || "false")}
      />

      <CustomChip
        label="outlet"
        icon={<ElectricalServicesIcon />}
        condition={JSON.parse(detailInfo?.plug.plug_available || "false")}
      />

      <CustomChip
        label="work friendly"
        icon={<AirlineSeatReclineExtraIcon />}
        condition={JSON.parse(detailInfo?.work.suitable_for_work || "false")}
      />
    </Stack>
  );
};

export default AnalisisCards;
