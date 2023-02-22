import React, { useContext } from 'react';
import './RangeDeposit.scss';
import stateContext from '../../context';

export default function RangeDeposit() {

  const { carPrice, deposit, setDeposit, percant, setPercant } = useContext(stateContext);
  
  const handleChangeDeposit = (event) => {
    if (event.target.value === '') {
      setDeposit(0);
      setPercant(0);
    } else {
      setDeposit((+event.target.value).toFixed(0));
      setPercant(((+event.target.value * 100) / carPrice).toFixed(0));
    }
  };
  const handleChangePercant = (event) => {
    if (event.target.value === '') {
      setDeposit(0);
      setPercant(0);
    } else {
      setDeposit(((+event.target.value * +carPrice) / 100).toFixed(0));
      setPercant((+event.target.value).toFixed(0));
    }
  };

  return (
    <div className="rangeDeposit">
      <div className="rangeTitle">Первоначальный взнос</div>
      <div className="rangeInput">
        <div className="inputDeposit">
          <input className="input" type="text" value={deposit} onChange={handleChangeDeposit} />
          <span className="span" onChange={handleChangeDeposit}>
            {percant}%
          </span>
        </div>
        <input
          className="slider"
          type="range"
          min={10}
          max={60}
          value={percant}
          step={1}
          onChange={handleChangePercant}
        />
      </div>
    </div>
  );
}
