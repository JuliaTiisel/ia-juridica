// Chat.jsx
import React, { useState } from 'react'
import styles, { layout } from '../style.js'

const Chat = () => {
  const [documents, setDocuments] = useState(null)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0]
    setDocuments(file)
  }

  // Simula o envio de mensagem e a resposta do chatbot
  const sendMessage = () => {
    if (!input.trim()) return
    const userMessage = { sender: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    // Integre aqui a API da IA Jurídica para obter uma resposta real
    const botResponse = { sender: 'bot', text: 'Resposta da IA Jurídica...' }
    setMessages(prev => [...prev, botResponse])
    setInput('')
  }

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} min-h-screen bg-black-gradient-2 py-10`}>
      <div className={`${layout.section} bg-primary rounded-2xl p-10 shadow-2xl max-w-4xl w-full`}>
        <h2 className={`${styles.heading2} text-center mb-6`}>Chat com a IA Jurídica</h2>
        <p className={`${styles.paragraph} text-center mb-8`}>
          Insira seus documentos e converse com nosso assistente para criar petições e analisar casos.
        </p>

        {/* Seção de Upload de Documentos */}
        <div className="mb-8">
          <label className={`${styles.paragraph} block mb-2 text-white`} htmlFor="documentUpload">
            Insira seus documentos:
          </label>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="documentUpload"
              className="cursor-pointer py-2 px-6 bg-blue-500 hover:bg-blue-600 transition text-white font-semibold rounded-lg">
              Escolher Arquivo
            </label>
            {documents && (
              <p className="text-white font-medium">{documents.name}</p>
            )}
            <input
              id="documentUpload"
              type="file"
              onChange={handleDocumentUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Área de Conversa */}
        <div className="mb-8">
          {/* Removemos o fundo branco para evitar o "quadrado" indesejado */}
          <div className="rounded-lg p-6 max-h-80 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} px-2`}>
                <div className={`p-4 rounded-lg max-w-md break-words ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campo de Entrada e Botão de Envio */}
        <div className="flex mt-6">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-4 border border-gray-300 rounded-l-lg outline-none"
          />
          <button
            onClick={sendMessage}
            className="py-4 px-8 bg-blue-gradient text-white rounded-r-lg outline-none transition hover:opacity-90"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
