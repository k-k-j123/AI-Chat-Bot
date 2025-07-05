import React, { useState } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';


interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 p-4 bg-white border-t border-gray-200">
      <div className="flex items-center gap-2">
        {/* Attachment Button - now a standard HTML button */}
        <button
          type="button"
          // Replicating Shadcn Button's 'ghost' variant and 'sm' size styles with Tailwind
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-3
                     text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none p-2"
        >
          <Paperclip className="w-4 h-4" />
        </button>
        {/* Microphone Button - now a standard HTML button */}
        <button
          type="button"
          // Replicating Shadcn Button's 'ghost' variant and 'sm' size styles with Tailwind
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-3
                     text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none p-2"
        >
          <Mic className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={disabled}
          rows={1}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm leading-relaxed"
          style={{ minHeight: '48px', maxHeight: '120px' }}
        />
      </div>

      {/* Send Button - now a standard HTML button */}
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        // Applying the existing gradient and hover styles
        className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-4 py-3 text-white transition-all duration-200
                   bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};