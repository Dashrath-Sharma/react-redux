import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  } 
  function handleSubmit(e){
    console.log(name)
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
