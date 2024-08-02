import { Stack } from "@mui/material";
import Image from "next/image";

const equipmentIcons: string[] = ["wifi", "outlet", "cigarette"];

const IconComponent = ({
  selectedIcons,
  setSelectedIcons,
}: {
  selectedIcons: any;
  setSelectedIcons: any;
}) => {
  const handleIconClick = (icon: string) => {
    setSelectedIcons((prevState: string[]) => ({
      ...prevState,
      [icon]: !prevState[icon],
    }));
  };

  return (
    <Stack direction="row" sx={{ gap: 2 }}>
      {equipmentIcons.map((icon: string) => (
        <Image
          key={icon}
          src={`/card/${icon}.svg`}
          alt={icon}
          height="25"
          width="25"
          onClick={() => handleIconClick(icon)}
          style={{
            cursor: "pointer",
            filter: selectedIcons[icon] ? "invert(0)" : "invert(1)",
          }}
        />
      ))}
    </Stack>
  );
};

export default IconComponent;
