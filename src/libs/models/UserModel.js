import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
    linkedIn: {
      type: String,
      required: false,
    },
    homepage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.users || mongoose.model("users", UserSchema);
