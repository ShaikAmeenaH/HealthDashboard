import React, { useState } from "react";
import { Send } from "lucide-react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi there!" },
    { id: 2, sender: "user", text: "Hello!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: Date.now(), sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-md w-full">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Chat</h2>

      <div className="bg-white rounded-md shadow h-64 overflow-y-auto p-2 space-y-2 text-sm">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`px-3 py-1 rounded-full ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-3 py-1 text-sm"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="p-1 bg-blue-500 text-white rounded-full">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
