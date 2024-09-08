import { Stack, Box } from "@mui/material";
import Image from "next/image";

const equipmentIcons: string[] = ["isWifi", "isOutlet", "isSmoking"];

const IconComponent = ({
  selectedIcons,
  setSelectedIcons,
}: {
  selectedIcons: { [key: string]: boolean };
  setSelectedIcons: any;
}) => {
  const handleIconClick = (icon: string) => {
    setSelectedIcons((prevState: any) => ({
      ...prevState,
      [icon]: !prevState[icon],
    }));
  };

  return (
    <Stack direction="row" sx={{ gap: 2 }}>
      {equipmentIcons.map((icon: string) => (
        <Box
          key={icon}
          sx={{
            width: { xs: 20, sm: 25 },
            height: { xs: 20, sm: 25 },
            position: "relative",
            cursor: "pointer",
            filter: selectedIcons[icon] ? "invert(0)" : "invert(1)",
          }}
          onClick={() => handleIconClick(icon)}
        >
          <Image
            src={`/card/${icon}.svg`}
            alt={icon}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      ))}
    </Stack>
  );
};

export default IconComponent;
