import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String },
    content: { type: String, required: true },
    category: { type: String, ref: 'Category', required: true, index: true },
  },
  { collection: 'posts', timestamps: true },
);

export default mongoose.model('Post', schema);
