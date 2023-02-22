import React from 'react';
import RangeCar from '../rangeCar/RangeCar';
import RangeDeposit from '../rangeDeposit/RangeDeposit';
import RangeLeasing from '../rangeLeasing/RangeLeasing';
import './Range.scss';

function Range() {
  return (
    <div className="range">
      <RangeCar />
      <RangeDeposit />
      <RangeLeasing />
    </div>
  );
}

export default Range;
