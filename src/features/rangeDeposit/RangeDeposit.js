import React from 'react';
import { useState } from 'react';
import './RangeDeposit.scss';

export default function RangeDeposit() {
  const [deposit, setDeposit] = useState(0);
  const [percant, setPercant] = useState(0);

  const handleChangeDeposit = (event) => {
    if (event.target.value === '') {
      setDeposit(0);
      setPercant(0);
    } else {
      setDeposit(event.target.value);
      setPercant(event.target.value);
    }
  };

  return (
    <div className='rangeDeposit'>
      <div className='rangeTitle'>Первоначальный взнос</div>
      <div className='rangeInput'>
        <div className='inputDeposit'>
          <input
            className='input'
            type="number"
            value={deposit}
            onChange={handleChangeDeposit}
          />
          <span className='span' onChange={handleChangeDeposit}>
            {percant}%
          </span>
        </div>
        <input
          className='slider'
          type="range"
          min={10}
          max={60}
          value={deposit}
          step={1}
          onChange={handleChangeDeposit}
        />
      </div>
    </div>
  );
}