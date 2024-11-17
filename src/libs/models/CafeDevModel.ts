import mongoose, { Schema } from "mongoose";

const CafeDevSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  open_now: {
    type: Boolean,
    required: true,
  },
  place_id: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: null,
  },
  photo_ref: {
    type: String,
    default: null,
  },
  rating: {
    type: Number,
    required: true,
  },
  wifi: {
    wifi_available: {
      type: String,
      required: true,
    },
    confidence: {
      type: Number,
      required: true,
    },
  },
  work: {
    suitable_for_work: {
      type: String,
      required: true,
    },
    confidence: {
      type: Number,
      required: true,
    },
  },
  coffee_price: {
    min_coffee_price: {
      type: String,
      required: true,
    },
    confidence: {
      type: Number,
      required: true,
    },
  },
  plug: {
    plug_available: {
      type: String,
      required: true,
    },
    confidence: {
      type: Number,
      required: true,
    },
  },
  ai_analysis: {
    type: String,
    required: true,
  },
  important_reviews: {
    type: [String],
    required: true,
  },
});

console.log("🚀 ~ mongoose.models.models:", mongoose.models);
export const CafeDevModel =
  mongoose.models.CafeDev ||
  mongoose.model("CafeDev", CafeDevSchema, "cafe_dev");
