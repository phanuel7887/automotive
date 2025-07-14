import { Router } from 'express';
import { sendMessage, getChatHistory } from '../controllers/chatController';

const router = Router();

// Route to send a message
router.post('/send', sendMessage);

// Route to get chat history
router.get('/history', getChatHistory);

export default router;