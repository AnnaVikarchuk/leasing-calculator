import { useState } from 'react';
import './App.scss';
import Range from '../range/Range.js';
import FinalResult from '../finalResult/FinalResult';

function App() {
  
  return (
    <div className="App">
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <Range />
      <FinalResult />
    </div>
  );
}

export default App;
