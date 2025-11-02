import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content : String,
    },
    { timestamps: true }
);

const Post = mongoose.model('Posts', postSchema);

export default Post;