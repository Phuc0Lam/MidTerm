import ApiKey from '../model/apikey.model.js';
const authMiddleware = async (req, res, next) => {
    const apiKey = req.query.apikeya;
    console.log("Received apiKey:", apiKey);

  // ✅ Kiểm tra apiKey có được cung cấp không
  if (!apiKey) {
    return res.status(401).json({ message: 'Access denied. No apiKey provided.' });
  }

  // ✅ Kiểm tra apiKey trong MongoDB
  const session = await ApiKey.findOne({ apiKey: apiKey });
  console.log("API Key session from DB:", session);
  if (!session) {
    return res.status(403).json({ message: 'Invalid or expired apiKey.' });
  }

  req.user = { userId: session.userId, email: session.email };
  next();
};
export default authMiddleware;