import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faPaperPlane, 
  faRobot, 
  faUser,
  faMinimize,
  faExpand
} from '@fortawesome/free-solid-svg-icons';

export default function ModalChatBot({ isOpen = true, onClose = () => {}, onMinimize = () => {} }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);

    // محاكاة استجابة من الـ API
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "شكراً لك على رسالتك! سأقوم بالرد عليك قريباً. هذه مجرد رسالة تجريبية حتى يتم ربط الـ API الحقيقي.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    onMinimize();
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('ar-EG', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

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
          scale: isMinimized ? 0.3 : 1, 
          opacity: 1, 
          y: isMinimized ? window.innerHeight - 200 : 0,
          x: isMinimized ? window.innerWidth - 200 : 0
        }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="position-relative bg-white rounded-3 shadow-lg overflow-hidden"
        style={{
          width: isMinimized ? '120px' : '90%',
          maxWidth: isMinimized ? '120px' : '500px',
          height: isMinimized ? '60px' : '70vh',
          maxHeight: isMinimized ? '60px' : '600px',
          zIndex: 1060,
          border: '2px solid #effbf9'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="d-flex align-items-center justify-content-between p-3 text-white position-relative"
          style={{ backgroundColor: '#2563eb' }}
        >
          <div className="d-flex align-items-center">
            <div 
              className="rounded-circle me-2 d-flex align-items-center justify-content-center"
              style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#effbf9',
                color: '#2563eb' 
              }}
            >
              <FontAwesomeIcon icon={faRobot} />
            </div>
            {!isMinimized && (
              <div>
                <h6 className="mb-0 fw-bold">مساعد ذكي</h6>
                <small className="opacity-75">متاح الآن</small>
              </div>
            )}
          </div>
          
          {!isMinimized && (
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-outline-light border-0 p-1"
                style={{ width: '32px', height: '32px' }}
                onClick={handleMinimize}
              >
                <FontAwesomeIcon icon={faMinimize} size="sm" />
              </button>
              <button
                className="btn btn-sm btn-outline-light border-0 p-1"
                style={{ width: '32px', height: '32px' }}
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faTimes} size="sm" />
              </button>
            </div>
          )}

          {isMinimized && (
            <button
              className="btn btn-sm btn-outline-light border-0 p-1"
              style={{ width: '28px', height: '28px' }}
              onClick={() => setIsMinimized(false)}
            >
              <FontAwesomeIcon icon={faExpand} size="sm" />
            </button>
          )}
        </div>
        
        {/* Messages Area */}
        {!isMinimized && (
          <>
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
                        color: msg.sender === 'user' ? 'white' : '#2563eb'
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

              {/* Typing Indicator */}
              {isTyping && (
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
                        color: '#2563eb'
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
              <form onSubmit={handleSendMessage} className="d-flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  className="form-control border-2"
                  placeholder="اكتب رسالتك هنا..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ 
                    borderColor: '#effbf9',
                    fontSize: '14px'
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-primary px-3"
                  disabled={!message.trim()}
                  style={{ 
                    backgroundColor: '#2563eb',
                    borderColor: '#2563eb'
                  }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </motion.button>
              </form>
            </div>
          </>
        )}
      </motion.div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}