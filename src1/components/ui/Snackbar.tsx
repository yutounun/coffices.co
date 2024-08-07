"use client";

import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import useSnackbarStore from "@/store/snackbar";

const Snackbar = () => {
  const { showSnackbar, closeSnackbar, type, message } = useSnackbarStore();

  return (
    <MuiSnackbar
      open={showSnackbar}
      onClose={closeSnackbar}
      autoHideDuration={3000}
    >
      <Alert onClose={closeSnackbar} severity={type}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
