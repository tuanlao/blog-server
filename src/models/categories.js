import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { collection: 'categories', timestamps: true },
);

export default mongoose.model('Category', schema);
