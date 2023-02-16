import React from 'react';
import './RangeCar.scss';
import { useState } from 'react';

export default function RangeCar() {
  const [carPrice, setCarPrice] = useState(1500000);

  const handleChangePrice = (event) => {
    if (event.target.value === '') {
      setCarPrice(0);
    } else {
      let numbers = event.target.value;
      let res = numbers.replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
      console.log(typeof res, res)
      setCarPrice(String(res.replace(/\s/g, '')));
      console.log(carPrice);
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