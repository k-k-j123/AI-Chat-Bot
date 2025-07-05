
import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from './utils';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex gap-3 mb-4 animate-fade-in", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={cn(
        "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-sm",
        isUser 
          ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white ml-12" 
          : "bg-white border border-gray-200 mr-12"
      )}>
        <p className="text-sm leading-relaxed">{message}</p>
        <p className={cn(
          "text-xs mt-1 opacity-70",
          isUser ? "text-blue-100" : "text-gray-500"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};
