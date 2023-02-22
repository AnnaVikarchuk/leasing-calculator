import { useState } from 'react';
import stateContext from '../../context';
import './App.scss';
import Range from '../range/Range.js';
import FinalResult from '../finalResult/FinalResult';

function App() {
  const [carPrice, setCarPrice] = useState(1500000);
  const [deposit, setDeposit] = useState(0);
  const [percant, setPercant] = useState(0);
  const [leasing, setLeasing] = useState(6);

  const monthPayment = (
    (Number(carPrice) - Number(deposit)) *
    ((0.05 * Math.pow(1 + 0.05, leasing)) / (Math.pow(1 + 0.05, leasing) - 1))
  ).toFixed(0);

  const sumContract = Number(deposit) + Number(leasing) * monthPayment;

  // Формулы расчета для полей:
  // “Сумма договора лизинга” = Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж от
  // “Ежемесячный платеж от” =
  // (Стоимость автомобиля - Первоначальный взнос) * (0.05 * Math.pow((1 + 0.05), Срок кредита в месяцах) / (Math.pow((1 + 0.05), Срок кредита в месяцах) - 1)

  return (
    <div className="App">
      <stateContext.Provider
        value={{
          carPrice,
          setCarPrice,
          deposit,
          setDeposit,
          percant,
          setPercant,
          leasing,
          setLeasing,
          monthPayment,
          sumContract
        }}>
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
        <Range />
        <FinalResult />
      </stateContext.Provider>
    </div>
  );
}

export default App;
