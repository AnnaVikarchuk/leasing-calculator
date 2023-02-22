import React, { useContext } from 'react';
import stateContext from '../../context';
import './RangeLeasing.scss';

export default function RangeLeasing() {
  
  const { leasing, setLeasing } = useContext(stateContext);

  const handleChangeLeasing = (event) => {
    if (event.target.value === '') {
      setLeasing(0);
    } else {
      setLeasing(event.target.value);
    }
  };

  return (
    <div className="rangeLeasing">
      <div className="rangeTitle">Срок лизинга</div>
      <div className="rangeInput">
        <div className="inputLeasing">
          <input className="input" type="number" value={leasing} onChange={handleChangeLeasing} />
          <span className="span">мес.</span>
        </div>
        <input
          className="slider"
          type="range"
          min={6}
          max={120}
          value={leasing}
          onChange={handleChangeLeasing}
        />
      </div>
    </div>
  );
}
