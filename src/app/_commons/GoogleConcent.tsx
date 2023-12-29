"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getLocalStorage, setLocalStorage } from "../../libs/storageHelper";
import { useState, useEffect } from "react";

export default function GoogleConcent({}) {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const permission = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: permission,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  const agree = () => {
    setCookieConsent(true);
  };

  const disagree = () => {
    setCookieConsent(false);
  };

  return (
    cookieConsent && (
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            このサイトではCookieを利用します。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={disagree}>同意しない</Button>
          <Button onClick={agree} autoFocus>
            同意
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
}
