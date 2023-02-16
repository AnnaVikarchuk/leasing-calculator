import React from 'react';
import './FinalResult.scss';

function FinalResult() {
  
  return (
    <div className='finalResult'>
      <div className='finalResultItem'>
        <span className='title'>Сумма договора лизинга</span>
        <div className='value'>
          3&nbsp;000&nbsp;000<span>&nbsp;₽</span>
        </div>
      </div>
      <div className='finalResultItem'>
        <span className='title'>Ежемесячный платеж от</span>
        <div className='value'>
          15&nbsp;000<span>&nbsp;₽</span>
        </div>
      </div>
      <div className="finalResultBtn">
        <button>Оставить заявку</button>
      </div>
    </div>
  );
}

export default FinalResult;