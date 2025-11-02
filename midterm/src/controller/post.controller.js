import Post from '../model/post.model.js';

const postController = {
  createPost: async (req, res) => {
    try {
      const { userId, content } = req.body;
        
      // Kiểm tra dữ liệu bắt buộc
      if (!userId || !content) {
        return res.status(400).json({ message: 'userId and content are required.' });
      }

      // (Optional) Kiểm tra userId có khớp với apiKey không
      console.log("Authenticated userId:", req.user.userId);
      console.log("Post userId:", userId);
      if (req.user.userId !== userId) {
        return res.status(403).json({ message: 'userId does not match the apiKey.' });
      }

      const newPost = new Post({ userId, content });
      await newPost.save();

      res.status(201).json({
        message: 'Post created successfully',
        post: newPost,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  updatePost: async (req, res) => {
    // Implementation for updating a post
  },
  createPost: async (req, res) => {
    try {
      const { userId, content } = req.body;

      if (!userId || !content) {
        return res.status(400).json({ message: 'userId and content are required.' });
      }

      // Kiểm tra userId có khớp apiKey không
      if (req.user.userId !== userId) {
        return res.status(403).json({ message: 'userId does not match the apiKey.' });
      }

      const newPost = new Post({ userId, content });
      await newPost.save();

      res.status(201).json({
        message: 'Post created successfully',
        post: newPost,
      });
    } catch (error) {
      console.error('❌ Create Post Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // ------------------ UPDATE POST ------------------
  updatePost: async (req, res) => {
    try {
      const { id } = req.params; // Lấy id bài post từ URL
      const { content } = req.body;

      // ✅ Kiểm tra nội dung mới
      if (!content || content.trim() === '') {
        return res.status(400).json({ message: 'Content is required.' });
      }

      // ✅ Tìm bài post
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found.' });
      }


      // ✅ Cập nhật nội dung
      post.content = content;
      await post.save();

      res.status(200).json({
        message: 'Post updated successfully',
        updatedPost: post,
      });
    } catch (error) {
      console.error('❌ Update Post Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

export default postController;