import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = { role: 'user', content: message };
    setChatHistory(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      const data = await response.json();
      
      if (data.success) {
        const aiMessage = { role: 'assistant', content: data.response };
        setChatHistory(prev => [...prev, aiMessage]);
      } else {
        const errorMessage = { role: 'assistant', content: `Error: ${data.error}` };
        setChatHistory(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage = { role: 'assistant', content: 'Error: Could not connect to server' };
      setChatHistory(prev => [...prev, errorMessage]);
    }
    
    setMessage('');
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>JARVIS 3.0</h1>
        <p>AI Assistant</p>
      </header>
      
      <div className="chat-container">
        <div className="chat-messages">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
          {isLoading && <div className="message assistant loading">Thinking...</div>}
        </div>
        
        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button onClick={sendMessage} disabled={isLoading || !message.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

