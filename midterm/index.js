import express from 'express';  
import connectMongo from './src/config/connectMongo.config.js';
import User from './src/model/user.model.js';   
import userController from './src/controller/user.controller.js';
connectMongo();
const app = express();
const port = 3000;
app.use(express.json());

app.post('/users/register', userController.register);
app.post('/users/login', userController.login);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});