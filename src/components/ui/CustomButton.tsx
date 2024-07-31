import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      component="label"
      variant="contained"
      sx={{
        backgroundColor: "secondary.main",
        color: "primary.main",
        my: 3,
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
