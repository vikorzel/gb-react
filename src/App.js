import {Message} from './Message';
import {InputForm} from './InputForm';
import React, {useState, useCallback, useEffect} from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback(
      (message) => {
        setMessages((state) => [...state, message]);
      },
  );
  useEffect(()=>{
    const lastMessage = messages[messages.length-1];
    if (lastMessage && lastMessage.sender === 'User') {
      setTimeout(()=>{
        addMessage(
            {
              sender: 'Tong Po',
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut vel est dui. Nam dignissim sit amet eros vel rutrum. 
            Proin elit nisl, auctor sed urna in, porta tristique velit. 
            Nam. 😀 😀`,
            },
        );
      }, 1500);
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="messages">
        {messages.map((message, index) =>
          <Message message={message} key={index}/>)}
      </div>
      <InputForm addMessage={addMessage}/>
    </div>
  );
}

export default App;
