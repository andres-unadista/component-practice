import React from 'react';

export const ChildComponent = ({ name, addMessage, changeUser }) => {
  const sendMessage = () => {
    addMessage('Enviando mensaje');
  };

  const changeName = () => {
    changeUser('Enviando mensaje');
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={sendMessage}>Enviar</button>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};
