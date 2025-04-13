// Chat.jsx
import React, { useState } from 'react'
import styles, { layout } from '../style.js'
import Button from './Button.jsx'

const Chat = () => {
  const [documents, setDocuments] = useState(null)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0]
    setDocuments(file)
  }

  // Função para simular o envio de mensagem e receber uma resposta do chatbot
  const sendMessage = () => {
    if (!input) return
    const userMessage = { sender: 'user', text: input }
    setMessages(prevMessages => [...prevMessages, userMessage])
    // Aqui você integraria a API da IA Jurídica para obter uma resposta
    const botResponse = { sender: 'bot', text: 'Resposta da IA Jurídica...' }
    setMessages(prevMessages => [...prevMessages, botResponse])
    setInput('')
  }

  return (
    <div className={`${layout.section} p-6`}>
      <h2 className={styles.heading2}>Chat com a IA Jurídica</h2>
      <p className={`${styles.paragraph} mt-4`}>
        Insira seus documentos e converse com nosso assistente para criar petições e analisar casos.
      </p>

      <div className="mt-6">
        <label className={`${styles.paragraph} block mb-2`} htmlFor="documentUpload">
          Insira seus documentos:
        </label>
        <input
          id="documentUpload"
          type="file"
          onChange={handleDocumentUpload}
          className="mb-4 p-2 border rounded w-full"
        />
      </div>

      <div className="bg-white rounded-[10px] p-4 shadow-md mt-6">
        <div className="h-64 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-2 border rounded-l outline-none"
          />
          <button
            onClick={sendMessage}
            className="py-2 px-4 bg-blue-gradient text-white rounded-r outline-none"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
