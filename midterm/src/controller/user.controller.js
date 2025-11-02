
import User from '../model/user.model.js';
import crypto from 'crypto';
import ApiKey from '../model/apikey.model.js';
const apiKeys = new Map();
const userController = {
  register: async (req, res) => {
    try {
      const existingUser = await User.findOne({ username: req.body.username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      const existingEmail = await User.findOne({ email: req.body.email });
      if (existingEmail) {
        return res.status(400).json({ message: 'Email already registered' });
      }
      const { username, email, password } = req.body;
      const newUser = new User({username, email, password });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

    
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const randomString = crypto.randomBytes(16).toString('hex');


      const apiKey = `mern-${user._id}-${user.email}-${randomString}`;
        await ApiKey.create({
        apiKey,
        userId: user._id.toString(),
        email: user.email,
      });
      res.status(200).json({ 
        message: 'Login successful', 
        apiKey 
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
console.log("API Keys Map:", apiKeys);
export default userController;
export { apiKeys };