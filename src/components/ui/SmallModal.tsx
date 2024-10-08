import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Rating,
  Fade,
  Backdrop,
} from "@mui/material";
import { Close, Star, StarBorder } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import CustomButton from "./CustomButton";
import { CreateReviewRequestI } from "@/types/cafes";
import { addReview, getUser as fetchUser } from "@/utils/api";
import userStore from "@/store/me";
import useReviewModalStore from "@/store/reviewModal";
import useSnackbarStore from "@/store/snackbar";

interface SmallModalProps {
  title: string;
  description: string;
  cafeId: string;
}

interface FormValues {
  title: string;
  content: string;
  rate: number;
}

const SmallModal: React.FC<SmallModalProps> = ({
  title,
  description,
  cafeId,
}) => {
  const { user } = userStore();
  const { showsReviewModal, closeReviewModal } = useReviewModalStore();
  const { openSnackbar } = useSnackbarStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleCancel = () => {
    closeReviewModal();
    reset();
  };

  const onSubmit = (data: FormValues) => {
    const reviewData: CreateReviewRequestI = {
      ...data,
      cafeId,
      userId: user._id,
    };
    try {
      addReview(reviewData);
      openSnackbar("success", "review is posted");
      closeReviewModal();
      reset();
    } catch (err: any) {
      const errorMessage = err.message || "An unknown error occurred";
      openSnackbar("error", errorMessage);
    }
  };

  return (
    <Modal
      open={showsReviewModal}
      onClose={closeReviewModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={showsReviewModal}>
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={closeReviewModal}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <Close />
          </IconButton>

          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{description}</Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Review Score
            </Typography>
            <Controller
              name="rate"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <Rating
                  {...field}
                  onChange={(event, value) => field.onChange(value)}
                  precision={1}
                  icon={<Star fontSize="medium" />}
                  emptyIcon={<StarBorder fontSize="medium" />}
                />
              )}
            />
            {errors.rate && (
              <Typography color="error">Score is required</Typography>
            )}

            <TextField
              label="Review Title"
              fullWidth
              sx={{ mt: 1 }}
              {...control.register("title", { required: true })}
              error={!!errors.title}
              helperText={errors.title ? "Title is required" : ""}
            />

            <TextField
              label="Review Description"
              fullWidth
              multiline
              rows={4}
              sx={{ mt: 2 }}
              {...control.register("content", { required: true })}
              error={!!errors.content}
              helperText={errors.content ? "Description is required" : ""}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <CustomButton
                onClick={handleCancel}
                sx={{
                  mr: 2,
                  width: 120,
                  backgroundColor: "primary.main",
                  color: "custom.grey",
                  ":hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Cancel
              </CustomButton>
              <CustomButton
                type="submit"
                variant="contained"
                sx={{ width: 120 }}
              >
                Submit
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export default SmallModal;
