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

export default function GoogleConcent() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, []);

  function setAnalytics(permission: boolean) {
    window.gtag("consent", "update", {
      analytics_storage: permission ? "granted" : "denied",
    });

    setLocalStorage("cookie_consent", permission);
  }

  const agree = () => {
    setCookieConsent(true);
    setAnalytics(true);
  };

  const disagree = () => {
    setCookieConsent(false);
    setAnalytics(false);
  };

  return cookieConsent === null ? (
    <Dialog open={true}>
      cookieConsent: {cookieConsent}
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
  ) : null;
}
