'use client'
import { useState, useRef } from 'react';
import parser from '../../backend/parser';

const Chat = (): JSX.Element => {
  const [messages, setMessages] = useState<string[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
};

  return (
    <div className='fixed'>
      <div
        ref={chatRef}
        className="chat chat-end"
        style={{
          top: '0px',
          left: '600px',
          height: '580px',
          width: '660px',
          backgroundColor: '#F8F3E8',
          color: '#4D4C47',
          overflow: 'hidden',
          position: 'absolute',
          overflowY: 'scroll',
        }}
      > {/* buat kotak besar*/}
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              alignSelf: message.startsWith('Me: ') ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                backgroundColor: message.startsWith('Me: ')
                  ? '#9F9B92'
                  : '#4D4C47',
                color: message.startsWith('Me: ') ? '#fff' : '#9F9B92',
                padding: '8px 12px',
                borderRadius: '20px',
                maxWidth: '60%',
                marginBottom: '4px',
                fontSize: '16px',
                wordWrap: 'break-word'
              }}
            >
              {message}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          marginTop: '12px',
        }}
      > {/*kotak type*/}
        <input
          type="text"
          placeholder="Type your message here"
          className="bg-gray-200 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-67 px-1037"
          style={{
            backgroundColor: '#9F9B92',
            color: '#4D4C47',
            height: '40px',
            width: '600px',
            font: 'Inter',
            fontSize: '16px',
            marginBottom: '8px',
            top: '580px',
            left: '600px',
            position: 'absolute',
            whiteSpace: 'pre-wrap',
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && event.currentTarget.value.trim() === '') {
              event.preventDefault();
              handleSendMessage('Bot: Please enter a message.');
              return;
            }
            if (event.key === 'Enter' && !event.shiftKey) {
              handleSendMessage(`Me: ${event.currentTarget.value}`);
              handleSendMessage(`Bot: ${parser(event.currentTarget.value)}`);
              event.currentTarget.value = '';
              chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
              event.preventDefault();
            }
          }}
        />
        <button
          type="submit"
          className="bg-[#4D4C47] hover:bg-[#9F9B92] text-white font-bold py-2 px-4 rounded"
          style={{
            height: '40px',
            width: '62px',
            font: 'Inter',
            fontSize: '16px',
            top: '580px',
            left: '1200px',
            position: 'absolute'
          }}
          onClick={() => {
            const input = document.getElementById(
              'chat-input'
            ) as HTMLInputElement;
            handleSendMessage(`Me: ${input.value}`);
            input.value = '';
            chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
