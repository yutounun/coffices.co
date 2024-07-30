"use client";
import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { addReview, putCafe } from "@/utils/api";
import { useForm } from "react-hook-form";
import { CafeI } from "@/types/cafes";
import meStore from "@/store/me";
import { useSession } from "next-auth/react";
import { CafeListContext } from "@/contexts/CafeListContext";
import useTranslate from "@/hooks/useTranslate";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
  cafe: CafeI;
}

const CafePostReviewModal = ({
  showModal,
  handleModalClose,
  cafe,
}: propTypes) => {
  const { me } = meStore();
  const { data: session } = useSession();
  const { setCafeList } = useContext(CafeListContext);
  const { t } = useTranslate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      rate: null,
      cafeId: cafe._id,
    },
  });

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 370, md: 800 },
    bgcolor: "background.paper",
    boxShadow: 24,
    pb: 5,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  };

  /** Submit action */
  async function handleCafeReviewPostSubmit(data: any) {
    data.userId = me._id;
    data.image = session?.user?.image;
    await addReview(data).then((res) => {
      handleModalClose();
      setCafeList(res);
    });
  }
  return (
    <Modal
      open={showModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        {/* Modal Header */}
        <Stack
          direction="row"
          sx={{
            borderBottom: "solid 1px",
            px: 5,
            py: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {t?.reviewModal.titles.add}
          </Typography>
        </Stack>

        {/* Modal Body */}
        <Box sx={{ px: 5, py: 2 }}>
          <form
            onSubmit={handleSubmit(handleCafeReviewPostSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                height: "100%",
                display: "flex",
                px: { xs: 0, md: "5em" },
                py: "3em",
              }}
              spacing={4}
            >
              <TextField
                id="outlined-basic"
                label={t?.reviewModal.form.title.label}
                variant="outlined"
                size="small"
                sx={{ width: "100%" }}
                error={!!errors.title}
                helperText={errors.title?.message?.toString()}
                {...register("title", {
                  required: t?.reviewModal.form.title.required,
                })}
              />

              <TextField
                id="outlined-basic"
                size="small"
                label={t?.reviewModal.form.comment.label}
                variant="outlined"
                sx={{ width: "100%" }}
                error={!!errors.content}
                helperText={errors.content?.message?.toString()}
                {...register("content", {
                  required: t?.reviewModal.form.comment.required,
                })}
              />
              <TextField
                id="outlined-basic"
                label={t?.reviewModal.form.rating.label}
                size="small"
                type="number"
                variant="outlined"
                InputProps={{ inputProps: { min: 0, max: 5 } }}
                sx={{ width: { xs: "100%", sm: "45%" } }}
                {...register("rate", {
                  required: t?.reviewModal.form.rating.required,
                })}
                error={!!errors.rate}
                helperText={errors.rate?.message?.toString()}
              />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "30%", borderRadius: 1 }}
              >
                {t?.common.register}
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default CafePostReviewModal;
