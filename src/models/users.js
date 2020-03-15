import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      index: true,
    },
    password: { type: String, required: true, index: true },
  },
  { collection: 'users', timestamps: true },
);

export default mongoose.model('User', schema);
