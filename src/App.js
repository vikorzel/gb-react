import {Message} from './Message.js';
import {InputForm} from './InputForm.js';
import React, {useState, useCallback, useEffect} from 'react';
function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback(
      (message) => {
        console.log('mew', message);
        setMessages([...messages, message]);
      }, [messages],
  );
  useEffect(()=>{
    const lastMessage = messages[messages.length-1];
    if (lastMessage && lastMessage.sender === 'User') {
      setTimeout(()=>{
        setMessages([...messages,
          {
            sender: 'Tong Po',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut vel est dui. Nam dignissim sit amet eros vel rutrum. 
            Proin elit nisl, auctor sed urna in, porta tristique velit. 
            Nam. 😀 😀`,
          },
        ]);
      }, 1500);
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="messages">
        {messages.map((message, index) =>
          <Message text={message.text} sender={message.sender} key={index}/>)}
      </div>
      <InputForm addMessage={addMessage}/>
    </div>
  );
}

export default App;
