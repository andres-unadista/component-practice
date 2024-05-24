import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { FourthComponent } from './components/FourthComponent';
import { ChildComponent } from './components/ChildComponent';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Carlos');
  const [message, setMessage] = useState('');

  const addMessage = (message) => {
    setMessage(message);
    console.log(message);
  };
  const changeName = () => {
    setName('Juan');
  };

  const medicalRecord = {
    height: '160',
    bloodGroup: 'RhO+',
    allergies: 'None',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estructura inicial del proyecto y limpia.</p>
        <SecondComponent />
        <ThirdComponent name="Inés" lastName="Oliveros" card={medicalRecord} />
        <MyComponent />
        <h2>Mensaje del hijo</h2>
        <p>{message}</p>
        <ChildComponent name={name} addMessage={addMessage} changeUser={changeName} />
        <FourthComponent />
      </header>
    </div>
  );
}

export default App;
