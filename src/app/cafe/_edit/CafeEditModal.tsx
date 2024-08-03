"use client";
import React, { useContext, useState } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import CafeEditForm from "./CafeEditFormPage";
import { putCafe } from "@/utils/api";
import { CafeI, CafePutRequestI } from "@/types/cafes";
import { extractHourMinute } from "@/utils/commonFn";
import { cafeImageUpload } from "@/utils/api";
import { CafeListContext } from "@/contexts/CafeListContext";
import useTranslate from "@/hooks/useTranslate";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
  cafe: CafeI;
}

const CafeEditModal = ({ showModal, handleModalClose, cafe }: propTypes) => {
  return <>hello</>;
};

export default CafeEditModal;
