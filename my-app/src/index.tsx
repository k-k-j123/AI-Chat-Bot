
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatBot } from './ChatBot';
import { MessageCircle, Zap, Shield, Sparkles } from 'lucide-react';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"> 
      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="bg-white p-1">
              <div className="p-1 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
                <div className="p-6 md:p-8">
                  <ChatBot />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p> {new Date().getFullYear()} AI Chat Assistant. All rights reserved.</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );

// Create root and render the app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
