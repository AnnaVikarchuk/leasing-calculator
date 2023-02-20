import React from 'react';
import RangeCar from '../rangeCar/RangeCar';
import RangeDeposit from '../rangeDeposit/RangeDeposit';
import RangeLeasing from '../rangeLeasing/RangeLeasing';
import './Range.scss';

function Range({ carPrice, setCarPrice, deposit, setDeposit, percant, setPercant, leasing, setLeasing}) {
  return (
    <div className="range">
      <RangeCar carPrice={carPrice} setCarPrice={setCarPrice} deposit={deposit} setPercant={setPercant}/>
      <RangeDeposit
        deposit={deposit}
        setDeposit={setDeposit}
        percant={percant}
        setPercant={setPercant}
        carPrice={carPrice}
      />
      <RangeLeasing leasing={leasing} setLeasing={setLeasing}/>
    </div>
  );
}

export default Range;
