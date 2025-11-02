import express from 'express';  
import connectMongo from './src/config/connectMongo.config.js';
import User from './src/model/user.model.js';   

connectMongo();
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! This is MVC structure.');
}); 
app.post('/users', async (req, res) => {
    const {username,email, password} = req.body;
    // Luu user vao MongoDB
    const newUser = new User({ username,email, password });
    await newUser.save();
    res.status(201).send('User registered successfully');

});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});