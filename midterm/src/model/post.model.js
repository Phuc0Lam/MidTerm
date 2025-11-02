import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
    },
    { timestamps: true }
);

const Post = mongoose.model('Posts', postSchema);

export default Post;