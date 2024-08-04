"use client";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

const l7 = keyframes`
  33% { background-size: calc(100% / 3) 0%, calc(100% / 3) 100%, calc(100% / 3) 100%; }
  50% { background-size: calc(100% / 3) 100%, calc(100% / 3) 0%, calc(100% / 3) 100%; }
  66% { background-size: calc(100% / 3) 100%, calc(100% / 3) 100%, calc(100% / 3) 0%; }
`;

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          width: "60px",
          aspectRatio: "4",
          "--_g":
            "no-repeat radial-gradient(circle closest-side,#000 90%,#0000)",
          background: `
            var(--_g) 0% 50%,
            var(--_g) 50% 50%,
            var(--_g) 100% 50%
          `,
          backgroundSize: "calc(100% / 3) 100%",
          animation: `${l7} 1s infinite linear`,
        }}
      />
    </Box>
  );
};

export default Loading;
