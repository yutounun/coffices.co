import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.users || mongoose.model("users", UserSchema);
