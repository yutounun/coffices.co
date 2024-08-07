// components/ui/CustomButton.tsx
import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  sx?: any; // sxプロパティの型をanyに設定
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  sx = {},
  ...props
}) => {
  const defaultStyles: any = {
    backgroundColor: "secondary.main",
    color: "primary.main",
    width: "12em",
    textTransform: "none",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "secondary.dark",
    },
  };

  return (
    <Button variant="contained" sx={{ ...defaultStyles, ...sx }} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
