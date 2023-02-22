import React, { useContext } from 'react';
import './RangeCar.scss';
import stateContext from '../../context';

export default function RangeCar() {
  
  const {carPrice, setCarPrice, deposit, setPercant} = useContext(stateContext);

  const handleChangePrice = (event) => {
    if (event.target.value === '') {
      setCarPrice(0);
    } else {
      setCarPrice(event.target.value);
      console.log(carPrice)
      setPercant(((deposit * 100)/ +event.target.value).toFixed(0))
    }
  };

  return (
    <div className="rangeCar">
      <div className="rangeTitle">Стоимость автомобиля</div>
      <div className="rangeInput">
        <div className="inputPrice">
          <input className="input" type="text" value={carPrice} onChange={handleChangePrice} />
          <span className="span">₽</span>
        </div>
        <input
          onChange={handleChangePrice}
          className="slider"
          type="range"
          min={1500000}
          max={10000000}
          value={carPrice}
          step={10}
        />
      </div>
    </div>
  );
}