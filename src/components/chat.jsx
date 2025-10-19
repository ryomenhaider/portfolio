import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Moon, Sun } from 'lucide-react';

const ChatSalesWidget = () => {
  // ============ STATE ============
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: 'Hello! 👋 How can I help you today?',
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(
    window.matchMedia?.('(prefers-color-scheme: dark)').matches || false
  );
  const [config] = useState({
    chromaApiKey: import.meta.env.REACT_APP_CHROMA_API_KEY || '',
    chromaTenant: import.meta.env.REACT_APP_CHROMA_TENANT || '',
    chromaDatabase: import.meta.env.REACT_APP_CHROMA_DATABASE || '',
    openrouterApiKey: import.meta.env.REACT_APP_OPENROUTER_API_KEY || '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',
  });
  const [followUpTimer, setFollowUpTimer] = useState(null);
  const messagesEndRef = useRef(null);

  // ============ AUTO-SCROLL ============
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ============ FOLLOW-UP MESSAGE LOGIC ============
  const scheduleFollowUp = (assistantMessageId) => {
    if (followUpTimer) clearTimeout(followUpTimer);

    const timer = setTimeout(() => {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.sender === 'user') return; // User responded, cancel

      const followUpMessages = [
        "📅 Ready to see how this could work for you? Book a free 15-minute demo.",
        "💡 Check out our pricing plans to find the perfect fit for your needs.",
        "🚀 Let's get started! What specific challenge are you looking to solve?",
        "📊 Want to see a case study? I can share how similar businesses benefited.",
      ];

      const randomFollowUp =
        followUpMessages[Math.floor(Math.random() * followUpMessages.length)];

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'assistant',
          text: randomFollowUp,
          timestamp: Date.now(),
        },
      ]);
    }, 30000);

    setFollowUpTimer(timer);
  };

  // ============ RETRIEVE KNOWLEDGE SNIPPETS ============
  const retrieveKnowledgeSnippets = async (userQuery) => {
    if (!config.chromaApiKey || !config.chromaTenant || !config.chromaDatabase) {
      console.warn('Chroma Cloud not configured');
      return [];
    }

    try {
      const response = await fetch(
        `https://api.trychroma.com/api/v1/tenants/${config.chromaTenant}/databases/${config.chromaDatabase}/collections/documents/query`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-chroma-token': config.chromaApiKey,
          },
          body: JSON.stringify({
            query_texts: [userQuery],
            n_results: 5,
          }),
        }
      );

      if (!response.ok) throw new Error('Failed to retrieve knowledge');
      const data = await response.json();
      
      // Flatten Chroma's response format
      const snippets = [];
      if (data.documents && data.documents[0]) {
        data.documents[0].forEach((doc, idx) => {
          snippets.push({
            content: doc,
            distance: data.distances?.[0]?.[idx] || 0,
          });
        });
      }
      return snippets;
    } catch (error) {
      console.error('Knowledge retrieval error:', error);
      return [];
    }
  };

  // ============ GENERATE LLM RESPONSE ============
  const generateLLMResponse = async (userQuery, snippets) => {
    if (!config.openrouterApiKey) {
      return "⚠️ OpenRouter API key not configured. Please add REACT_APP_OPENROUTER_API_KEY to your .env file.";
    }

    const snippetText = snippets
      .map((s, i) => `[Snippet ${i + 1}]: ${s.content || s}`)
      .join('\n\n');

    const systemPrompt = `You are a sales assistant for a business.
                          Your tone is persuasive but honest and friendly.
                          You provide value-driven responses that address customer pain points.
                          Keep responses concise (2-3 sentences max).
                          Always end with 1-2 concrete actionable next steps as bullets (format: • Action).
                          Do not sound robotic or salesy in a negative way.`;

    const userPrompt = snippetText
      ? `Using these business context snippets:\n\n${snippetText}\n\nRespond to the customer:\n"${userQuery}"`
      : `You are a helpful sales assistant. Respond warmly to:\n"${userQuery}"`;

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.openrouterApiKey}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b:free',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || `OpenRouter error: ${response.status}`);
      }
      const data = await response.json();
      return data.choices?.[0]?.message?.content || "No response generated.";
    } catch (error) {
      console.error('LLM error:', error);
      return `⚠️ Error generating response: ${error.message}`;
    }
  };

  // ============ HANDLE SEND MESSAGE ============
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const snippets = await retrieveKnowledgeSnippets(input);
      const assistantText = await generateLLMResponse(input, snippets);

      const assistantMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: assistantText,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      scheduleFollowUp(assistantMessage.id);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: `⚠️ Something went wrong. Please check your configuration and try again.`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };



  // ============ RENDER ============
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open sales chat"
        className="fixed bottom-6 right-6 w-14 h-14 bg-white hover:bg-black text-black rounded-full shadow-lg flex items-center hover:text-white justify-center transition-transform hover:scale-110 z-50"
      >
        <MessageCircle size={28} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-h-96 rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden">
      {/* HEADER */}
      <div
        className={`p-4 flex items-center justify-between ${
          isDark ? 'bg-black text-white' : 'bg-blue-500 text-white'
        }`}
      >
        <div>
          <h3 className="font-semibold text-lg">Sales Assistant</h3>
          <p className="text-xs opacity-90">We're here to help</p>
        </div>
        <div className="flex gap-2">
          
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="p-2 hover:bg-white/20 rounded transition"
          >
            <X size={18} />
          </button>
        </div>
      </div>



      {/* MESSAGES */}
      <div
        className={`flex-1 overflow-y-auto p-4 space-y-3 ${
          isDark ? 'bg-black' : 'bg-gray-50'
        }`}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? isDark
                    ? 'bg-black text-white'
                    : 'bg-black text-white'
                  : isDark
                  ? 'bg-gray-9000 text-gray-100'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div
              className={`px-4 py-2 rounded-lg text-sm ${
                isDark ? 'bg-black text-gray-300' : 'bg-black text-white'
              }`}
            >
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-current rounded-full animate-bounce" />
                <span
                  className="w-2 h-2 bg-current rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="w-2 h-2 bg-current rounded-full animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div
        className={`p-3 border-t ${
          isDark ? 'bg-black border-white' : 'bg-white border-gray-200'
        }`}
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Ask anything..."
            aria-label="Message input"
            disabled={loading}
            className={`flex-1 px-3 py-2 rounded border text-sm focus:outline-none focus:ring-2 ${
              isDark
                ? 'bg-black border-white text-white focus:ring-white'
                : 'bg-white border-gray-300 focus:ring-blue-500'
            }`}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className={`px-3 py-2 rounded font-medium flex items-center gap-2 transition ${
              loading || !input.trim()
                ? isDark
                  ? 'bg-black hover:bg-white text-gray-500'
                  : 'bg-gray-200 text-gray-400'
                : isDark
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <Send size={16} />
          </button>
        </div>
        <p className="text-xs mt-2 opacity-60 text-center">
          ↵ Enter to send
        </p>
      </div>
    </div>
  );
};

export default ChatSalesWidget;