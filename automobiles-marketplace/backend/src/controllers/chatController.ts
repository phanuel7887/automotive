import { Request, Response } from 'express';
import { Chat } from '../models/chat';
import { aiService } from '../services/aiService';

export const sendMessage = async (req: Request, res: Response) => {
    const { userId, message } = req.body;

    try {
        const response = await aiService.getAIResponse(message);
        const chatEntry = new Chat({ userId, message, response });
        await chatEntry.save();

        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Error processing message' });
    }
};

export const getChatHistory = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const chatHistory = await Chat.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(chatHistory);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching chat history' });
    }
};