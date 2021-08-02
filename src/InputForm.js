import React, {useState} from 'react';
import './style/input.component.css';

export function InputForm(prop) {
  const [message, setMessage] = useState('');
  function onKeyPressHandler(e) {
    if (e.code === 'Enter' && e.shiftKey) {
      appendMessage();
    }
  }

  function appendMessage() {
    setMessage('');
    prop.addMessage({sender: 'User', text: message});
  }
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
      onClick={appendMessage}
    />
  </div>);
}
