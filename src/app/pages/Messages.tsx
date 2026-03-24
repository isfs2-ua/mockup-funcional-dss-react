import React, { useState, useEffect } from 'react';
import { useRole } from '../contexts/RoleContext';
import { Search, Send, Paperclip, MoreVertical, Check, CheckCheck, Clock } from 'lucide-react';

interface Message {
  id: string;
  senderId: 'me' | 'them';
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  roleSubtitle: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

const mockStudentConversations: Conversation[] = [
  {
    id: 'c1',
    name: 'TechNova RRHH',
    avatar: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=150&auto=format&fit=crop',
    roleSubtitle: 'Desarrollador Frontend Junior (React)',
    lastMessage: '¿Podrías enviarnos tu portfolio actualizado?',
    lastMessageTime: '10:30 AM',
    unreadCount: 1,
    messages: [
      { id: 'm1', senderId: 'me', text: '¡Hola! Muchas gracias por seleccionar mi perfil.', timestamp: 'Ayer, 16:45', status: 'read' },
      { id: 'm2', senderId: 'them', text: 'Hola Ana. Gracias a ti por aplicar. Tu perfil nos ha parecido muy interesante.', timestamp: 'Ayer, 17:10' },
      { id: 'm3', senderId: 'them', text: '¿Podrías enviarnos tu portfolio actualizado?', timestamp: '10:30 AM' },
    ],
  },
  {
    id: 'c2',
    name: 'MarketGurus',
    avatar: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=150&auto=format&fit=crop',
    roleSubtitle: 'Especialista SEO/SEM',
    lastMessage: 'Gracias por tu tiempo ayer.',
    lastMessageTime: 'Ayer',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'them', text: 'Nos gustaría agendar una breve llamada contigo.', timestamp: 'Hace 2 días' },
      { id: 'm2', senderId: 'me', text: '¡Perfecto! Estoy disponible mañana por la mañana.', timestamp: 'Hace 2 días', status: 'read' },
      { id: 'm3', senderId: 'them', text: 'Gracias por tu tiempo ayer. Te daremos feedback pronto.', timestamp: 'Ayer' },
    ],
  }
];

const mockRecruiterConversations: Conversation[] = [
  {
    id: 'c1',
    name: 'Ana García',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    roleSubtitle: 'Candidata - Desarrollador Frontend',
    lastMessage: '¡Hola! Muchas gracias por seleccionar mi perfil.',
    lastMessageTime: '16:45',
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'them', text: '¡Hola! Muchas gracias por seleccionar mi perfil.', timestamp: '16:45' },
    ],
  },
  {
    id: 'c2',
    name: 'Carlos López',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    roleSubtitle: 'Candidato - Desarrollador Frontend',
    lastMessage: 'Aquí tienes mi repositorio de GitHub.',
    lastMessageTime: 'Ayer',
    unreadCount: 2,
    messages: [
      { id: 'm1', senderId: 'me', text: 'Hola Carlos, ¿tienes algún proyecto personal que podamos ver?', timestamp: 'Ayer, 09:00', status: 'read' },
      { id: 'm2', senderId: 'them', text: '¡Hola! Sí, por supuesto.', timestamp: 'Ayer, 09:15' },
      { id: 'm3', senderId: 'them', text: 'Aquí tienes mi repositorio de GitHub.', timestamp: 'Ayer, 09:16' },
    ],
  }
];

export function Messages() {
  const { role } = useRole();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');

  // Update conversations when role changes
  useEffect(() => {
    const data = role === 'student' ? mockStudentConversations : mockRecruiterConversations;
    setConversations(data);
    if (data.length > 0) {
      setActiveChatId(data[0].id);
    }
  }, [role]);

  const activeChat = conversations.find(c => c.id === activeChatId);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: newMessage,
      timestamp: 'Ahora',
      status: 'sent',
    };

    const updatedConversations = conversations.map(c => {
      if (c.id === activeChat.id) {
        return {
          ...c,
          messages: [...c.messages, newMsg],
          lastMessage: newMessage,
          lastMessageTime: 'Ahora'
        };
      }
      return c;
    });

    setConversations(updatedConversations);
    setNewMessage('');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex h-[calc(100vh-10rem)] min-h-[500px]">
      
      {/* Sidebar - Chat List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mensajes</h2>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar conversación..." 
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {conversations.map(chat => (
            <div 
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`p-4 flex gap-3 cursor-pointer transition-colors border-b border-gray-50 last:border-0 ${
                activeChatId === chat.id ? 'bg-indigo-50/50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="relative shrink-0">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                {chat.unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-gray-900 text-sm truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{chat.lastMessageTime}</span>
                </div>
                <p className="text-xs text-indigo-600 font-medium mb-1 truncate">{chat.roleSubtitle}</p>
                <p className={`text-sm truncate ${chat.unreadCount > 0 ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      {activeChat ? (
        <div className="flex-1 flex flex-col min-w-0 hidden md:flex">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
            <div className="flex items-center gap-3">
              <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
              <div>
                <h3 className="font-bold text-gray-900">{activeChat.name}</h3>
                <p className="text-xs text-gray-500">{activeChat.roleSubtitle}</p>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 flex flex-col gap-4 custom-scrollbar">
            {activeChat.messages.map((msg, index) => {
              const isMe = msg.senderId === 'me';
              return (
                <div key={msg.id} className={`flex max-w-[75%] ${isMe ? 'self-end' : 'self-start'}`}>
                  <div className={`rounded-2xl px-4 py-2.5 ${
                    isMe 
                      ? 'bg-indigo-600 text-white rounded-tr-sm shadow-sm shadow-indigo-100' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <div className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${isMe ? 'text-indigo-200' : 'text-gray-400'}`}>
                      <span>{msg.timestamp}</span>
                      {isMe && (
                        msg.status === 'read' ? <CheckCheck className="w-3.5 h-3.5" /> : 
                        msg.status === 'delivered' ? <CheckCheck className="w-3.5 h-3.5 opacity-70" /> : 
                        <Check className="w-3.5 h-3.5 opacity-70" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSendMessage} className="flex items-end gap-2">
              <button type="button" className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors shrink-0">
                <Paperclip className="w-5 h-5" />
              </button>
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl relative focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-shadow">
                <textarea 
                  rows={1}
                  placeholder="Escribe un mensaje..."
                  className="w-full bg-transparent border-none py-3 pl-4 pr-12 text-sm focus:ring-0 resize-none outline-none max-h-32"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
              </div>
              <button 
                type="submit" 
                disabled={!newMessage.trim()}
                className={`p-3 rounded-full shrink-0 transition-colors shadow-sm ${
                  newMessage.trim() 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 hidden md:flex flex-col items-center justify-center bg-gray-50/50 text-center p-8">
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-300 shadow-sm">
            <Send className="w-6 h-6 ml-1" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Tus mensajes</h3>
          <p className="text-gray-500 max-w-sm">Selecciona una conversación del panel lateral para empezar a chatear o ver el historial de mensajes.</p>
        </div>
      )}
    </div>
  );
}
