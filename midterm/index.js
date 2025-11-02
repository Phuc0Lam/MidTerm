import express from 'express';  
import connectMongo from './src/config/connectMongo.config.js';
import User from './src/model/user.model.js';   
import userController from './src/controller/user.controller.js';
import authMiddleware from './src/middleware/auth.middleware.js';
import postController from './src/controller/post.controller.js';
connectMongo();
const app = express();
const port = 3000;
app.use(express.json());

app.post('/users/register', userController.register);
app.post('/users/login', userController.login);
app.post('/posts',authMiddleware,postController.createPost);
app.put('/posts/:id',authMiddleware,postController.updatePost);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});