import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      required: [true, "Provide Email"],
      unique: true,
      type: String,
      lowercase: true,
    },
    password: {
      required: [true, "Provide Password"],
      unique: true,
      type: String,
      minLength: 6,
    },
    username: {
      type: String,
      required: [true, "Provide Username"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
