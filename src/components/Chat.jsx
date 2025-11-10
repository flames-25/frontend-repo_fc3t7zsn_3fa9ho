import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: 'agent', text: 'Halo! Ada yang bisa kami bantu?' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), from: 'user', text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now()+1, from: 'agent', text: 'Terima kasih, petugas kami akan segera merespons.' }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700">
          <MessageCircle className="w-5 h-5" /> Chat Online
        </button>
      )}

      {open && (
        <div className="w-80 sm:w-96 h-96 rounded-2xl border bg-white shadow-xl overflow-hidden">
          <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-emerald-600 text-white flex items-center justify-between">
            <div className="font-semibold">Chat RS Sehat Sentosa</div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">✕</button>
          </div>
          <div className="p-3 space-y-2 overflow-y-auto h-[calc(24rem-6rem)]">
            {messages.map(m => (
              <div key={m.id} className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${m.from==='agent' ? 'bg-purple-50 text-purple-900 border border-purple-100' : 'bg-emerald-50 text-emerald-900 border border-emerald-100 ml-auto'}`}>
                {m.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="p-3 border-t flex items-center gap-2">
            <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && send()} placeholder="Tulis pesan..." className="flex-1 rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
            <button onClick={send} className="inline-flex items-center justify-center p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
