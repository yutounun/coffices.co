import mongoose, { Schema } from "mongoose";

const CafeSchema = new Schema(
  {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    rate: {
      type: Number,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    area: {
      type: String,
      required: false,
    },
    station: {
      type: String,
      required: false,
    },
    openHour: {
      type: String,
      required: false,
    },
    closeHour: {
      type: String,
      required: false,
    },
    isWifi: {
      type: Boolean,
      required: false,
    },
    isOutlet: {
      type: Boolean,
      required: false,
    },
    isSmoking: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

export const CafeModel =
  mongoose.models.Cafe || mongoose.model("cafes", CafeSchema);
