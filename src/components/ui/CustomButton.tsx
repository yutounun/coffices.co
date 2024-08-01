import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Button
      component="label"
      variant="contained"
      sx={{
        ...sx,
        backgroundColor: "secondary.main",
        color: "primary.main",

        width: "12em",
        textTransform: "none",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "secondary.dark",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
