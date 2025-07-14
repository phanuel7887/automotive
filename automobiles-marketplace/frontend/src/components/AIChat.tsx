import React, { useState } from 'react';

const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input) return;

        const userMessage = { user: 'User', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // Call the backend API to get the AI response
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const aiMessage = { user: 'AI', text: data.reply };
        setMessages((prev) => [...prev, aiMessage]);
    };

    return (
        <div className="ai-chat">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.user === 'AI' ? 'ai-message' : 'user-message'}>
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default AIChat;