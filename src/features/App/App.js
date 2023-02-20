import './App.scss';
import Range from '../range/Range.js';
import FinalResult from '../finalResult/FinalResult';
import { useState } from 'react';

function App() {
  const [carPrice, setCarPrice] = useState(1500000);
  const [deposit, setDeposit] = useState(0);
  const [percant, setPercant] = useState(0);
  const [leasing, setLeasing] = useState(6);

  const monthPayment = ((Number(carPrice) - Number(deposit)) * (0.05 * Math.pow((1 + 0.05), leasing) / (Math.pow((1 + 0.05), leasing) - 1))).toFixed(0);
  console.log(String(carPrice).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '))
  console.log(deposit)
  console.log(leasing)

  const sumContract = (Number(deposit) + Number(leasing) * monthPayment).toFixed(0);

  // Формулы расчета для полей:
  // “Сумма договора лизинга” = Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж от
  // “Ежемесячный платеж от” =
  // (Стоимость автомобиля - Первоначальный взнос) * (0.05 * Math.pow((1 + 0.05), Срок кредита в месяцах) / (Math.pow((1 + 0.05), Срок кредита в месяцах) - 1)
  return (
    <div className="App">
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <Range
        carPrice={carPrice}
        setCarPrice={setCarPrice}
        deposit={deposit}
        setDeposit={setDeposit}
        percant={percant}
        setPercant={setPercant}
        leasing={leasing}
        setLeasing={setLeasing}
      />
      <FinalResult monthPayment={monthPayment} sumContract={sumContract}/>
    </div>
  );
}

export default App;
