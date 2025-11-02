import mongoose from 'mongoose';
const connectMongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://lelam113113:hotdog321123ez@cluster0.zmxsssi.mongodb.net/Web91');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection error:', error);
  }     
};

export default connectMongo;