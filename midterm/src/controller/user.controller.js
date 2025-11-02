
import { get } from 'mongoose';
import User from '../model/user.model.js';
const userController = {
    register: async (req, res) => {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
        const existingEmail = await User.findOne({ email: req.body.email });
        if (existingEmail) {
      return res.status(400).json({ message: 'Email already registered' });
    }
        const { username, email, password } = req.body; 
        const newUser = new User({ username,email, password });
        await newUser.save();
    res.status(201).send('User registered successfully');
        
},
    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }       
        res.status(200).json({ message: 'Login successful' });
    },
};
export default userController;