import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    rate: {
      type: Number,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    cafeId: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const ReviewModel =
  mongoose.models.reviews || mongoose.model("review", ReviewSchema);
