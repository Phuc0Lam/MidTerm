import mongoose from 'mongoose';

const apiKeySchema = new mongoose.Schema({
  apiKey: { type: String, required: true },
  userId: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '1h' },
});

const Apikey = mongoose.model('ApiKey', apiKeySchema);
export default Apikey;