import React, {useState, useEffect} from 'react';
import './style/input.component.css';

export function InputForm(prop) {
  const [message, setMessage] = useState('');
  const [sendMessage, setSendMessage] = useState(false);
  function onKeyPressHandler(e) {
    if (e.code === 'Enter' && e.shiftKey) {
      setSendMessage(message);
    }
  }
  useEffect(() => {
    if (sendMessage) {
      prop.addMessage({sender: 'User', text: message});
      setMessage('');
    }
    return ()=>{
      setSendMessage(false);
    };
  });
  return ( <div className="input-block">
    <textarea
      cols={40}
      rows={5}
      name="message"
      value = {message}
      onChange={(e)=>setMessage(e.target.value)}
      className="input-area"
      onKeyPress={onKeyPressHandler}
    />
    <input
      type="button"
      className="input-button"
      value="Отправить"
      onClick={()=>setSendMessage(message)}
    />
  </div>);
}
