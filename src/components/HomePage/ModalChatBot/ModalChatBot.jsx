import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faPaperPlane, 
  faRobot, 
  faUser
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function ModalChatBot({ isOpen = true, onClose = () => {} }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "أهلاً وسهلاً! أنا هنا لمساعدتك",
      sender: 'bot',
      timestamp: new Date(),
      isComplete: true
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingMessage, setCurrentTypingMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const typewriterRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentTypingMessage]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const typewriterEffect = (text, messageId) => {
    setCurrentTypingMessage('');
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setCurrentTypingMessage(prev => prev + text[index]);
        setMessages(prev => prev.map(msg => 
          msg.id === messageId ? { ...msg, text: text.slice(0, index + 1) } : msg
        ));
        index++;
      } else {
        clearInterval(typeInterval);
        setMessages(prev => prev.map(msg => 
          msg.id === messageId ? { ...msg, isComplete: true } : msg
        ));
        setCurrentTypingMessage('');
        setIsTyping(false);
      }
    }, 30);

    typewriterRef.current = typeInterval;
  };

  const handleSendMessage = async (e) => {
  if (e) e.preventDefault();
  if (!message.trim()) return;

  const userMessage = {
    id: messages.length + 1,
    text: message,
    sender: 'user',
    timestamp: new Date(),
    isComplete: true
  };
  setMessages(prev => [...prev, userMessage]);
  setMessage('');
  setIsTyping(true);

  try {
    const response = await axios.post(
      'https://citioai-webapp.azurewebsites.net/chatbot',
      { question: message },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const botResponse = {
      id: messages.length + 2,
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      isComplete: false
    };
    setMessages(prev => [...prev, botResponse]);

    typewriterEffect(response.data.answer, botResponse.id);

  } catch (error) {
    console.error('API Error:', error);
    
    const errorMessage = {
      id: messages.length + 2,
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      isComplete: false
    };
    setMessages(prev => [...prev, errorMessage]);
    
    typewriterEffect("عفواً، حدث خطأ في الاتصال بالخادم", errorMessage.id);
  }
};

  const formatTime = (date) => {
    return date.toLocaleTimeString('ar-EG', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  useEffect(() => {
    return () => {
      if (typewriterRef.current) {
        clearInterval(typewriterRef.current);
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
      style={{ 
        zIndex: 1055,
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          y: 0
        }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="position-relative bg-white rounded-3 shadow-lg overflow-hidden"
        style={{
          width: '90%',
          maxWidth: '500px',
          height: '70vh',
          maxHeight: '600px',
          zIndex: 1060,
          border: '2px solid #effbf9'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="d-flex align-items-center justify-content-between p-3 text-white position-relative"
          style={{ backgroundColor: '#129990' }}
        >
          <div className="d-flex align-items-center">
            <div 
              className="rounded-circle me-2 d-flex align-items-center justify-content-center"
              style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#effbf9',
                color: '#129990' 
              }}
            >
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <div>
              <h6 className="mb-0 fw-bold">المساعد الذكي</h6>
              <small className="opacity-75">متصل الآن</small>
            </div>
          </div>
          
          <button
            className="btn btn-sm btn-outline-light border-0 p-1"
            style={{ width: '32px', height: '32px' }}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} size="sm" />
          </button>
        </div>
        
        {/* Messages Area */}
        <div 
          className="flex-grow-1 overflow-auto p-3"
          style={{ 
            height: 'calc(100% - 140px)',
            backgroundColor: '#f8f9fa'
          }}
        >
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`d-flex mb-3 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
            >
              <div className={`d-flex align-items-start ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div 
                  className={`rounded-circle me-2 ms-2 d-flex align-items-center justify-content-center ${
                    msg.sender === 'user' ? 'bg-primary' : 'bg-light'
                  }`}
                  style={{ 
                    width: '35px', 
                    height: '35px',
                    color: msg.sender === 'user' ? 'white' : '#129990'
                  }}
                >
                  <FontAwesomeIcon icon={msg.sender === 'user' ? faUser : faRobot} size="sm" />
                </div>
                <div className="d-flex flex-column">
                  <div 
                    className={`px-3 py-2 rounded-3 ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-white border'
                    }`}
                    style={{ 
                      maxWidth: '280px',
                      wordBreak: 'break-word'
                    }}
                  >
                    {msg.text}
                  </div>
                  <small className={`text-muted mt-1 ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
                    {formatTime(msg.timestamp)}
                  </small>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && !currentTypingMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="d-flex mb-3"
            >
              <div className="d-flex align-items-start">
                <div 
                  className="rounded-circle me-2 d-flex align-items-center justify-content-center bg-light"
                  style={{ 
                    width: '35px', 
                    height: '35px',
                    color: '#129990'
                  }}
                >
                  <FontAwesomeIcon icon={faRobot} size="sm" />
                </div>
                <div className="bg-white border px-3 py-2 rounded-3">
                  <div className="d-flex gap-1">
                    <div className="bg-secondary rounded-circle" style={{ 
                      width: '6px', 
                      height: '6px', 
                      animation: 'pulse 1.5s infinite ease-in-out' 
                    }}></div>
                    <div className="bg-secondary rounded-circle" style={{ 
                      width: '6px', 
                      height: '6px', 
                      animation: 'pulse 1.5s infinite ease-in-out 0.5s' 
                    }}></div>
                    <div className="bg-secondary rounded-circle" style={{ 
                      width: '6px', 
                      height: '6px', 
                      animation: 'pulse 1.5s infinite ease-in-out 1s' 
                    }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-top">
          <div className="d-flex gap-2">
            <input
              ref={inputRef}
              type="text"
              className="form-control border-2"
              placeholder="اكتب رسالتك هنا..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isTyping}
              style={{ 
                borderColor: '#effbf9',
                fontSize: '14px',
                cursor: 'text'
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="btn btn-primary px-3"
              disabled={!message.trim() || isTyping}
              style={{ 
                backgroundColor: '#129990',
                borderColor: '#129990'
              }}
              onClick={handleSendMessage}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}