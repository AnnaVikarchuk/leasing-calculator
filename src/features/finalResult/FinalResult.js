import React, { useContext } from 'react';
import stateContext from '../../context';
import './FinalResult.scss';

function FinalResult() {
  const { monthPayment, sumContract } = useContext(stateContext);

  return (
    <div className="finalResult">
      <div className="finalResultItem">
        <span className="title">Сумма договора лизинга</span>
        <div className="value">
          {sumContract}
          <span>&nbsp;₽</span>
        </div>
      </div>
      <div className="finalResultItem">
        <span className="title">Ежемесячный платеж от</span>
        <div className="value">
          {monthPayment}
          <span>&nbsp;₽</span>
        </div>
      </div>
      <div className="finalResultBtn">
        <button>Оставить заявку</button>
      </div>
    </div>
  );
}

export default FinalResult;
