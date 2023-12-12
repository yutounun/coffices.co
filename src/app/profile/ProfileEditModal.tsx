"use client";
import React from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "../../../node_modules/@mui/material/index";
import { useForm } from "react-hook-form";
import meStore from "../../store/me";
import { updateUser } from "_utils/api";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
}

const ProfileEditModal = ({
  showModal,
  handleModalClose,
}: propTypes) => {
  const { me, setMe } = meStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      _id: me._id,
      bio: me.bio,
      github: me.github,
      twitter: me.twitter,
      linkedIn: me.linkedIn,
      homePage: me.homepage,
    },
  });

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    pb: 5,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  };

  /** Submit action */
  async function handleProfileUpdateSubmit(data: any) {
    const user = await updateUser(data);
    setMe(user);
    handleModalClose();
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
            プロフィールを編集
          </Typography>
        </Stack>

        {/* Modal Body */}
        <Box sx={{ px: 5, py: 2 }}>
          <form
            onSubmit={handleSubmit(handleProfileUpdateSubmit)}
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
                px: "5em",
                py: "3em",
              }}
              spacing={4}
            >
              <TextField
                id="outlined-basic"
                label="紹介文"
                variant="outlined"
                sx={{ width: "100%" }}
                error={!!errors.bio}
                helperText={errors.bio?.message?.toString()}
                {...register("bio")}
              />

              <TextField
                id="outlined-basic"
                label="Github URL"
                variant="outlined"
                sx={{ width: "100%" }}
                error={!!errors.github}
                helperText={errors.github?.message?.toString()}
                {...register("github")}
              />

              <TextField
                id="outlined-basic"
                label="Twitter URL"
                variant="outlined"
                sx={{ width: "100%" }}
                error={!!errors.twitter}
                helperText={errors.twitter?.message?.toString()}
                {...register("twitter")}
              />

              <TextField
                id="outlined-basic"
                label="LinkedIn URL"
                variant="outlined"
                sx={{ width: "100%" }}
                error={!!errors.linkedIn}
                helperText={errors.linkedIn?.message?.toString()}
                {...register("linkedIn")}
              />

              <TextField
                id="outlined-basic"
                label="HomePage URL"
                variant="outlined"
                sx={{ width: "100%" }}
                error={!!errors.homePage}
                helperText={errors.homePage?.message?.toString()}
                {...register("homePage")}
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
                登録
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProfileEditModal;
