import React from 'react';
import style from './FinalResult.scss';

function FinalResult() {
  
  return (
    <div className={style.finalResult}>
      <div className={style.finalResultItem}>
        <span className={style.title}>Сумма договора лизинга</span>
        <div className={style.value}>
          000<span>&nbsp;₽</span>
        </div>
      </div>
      <div className={style.finalResultItem}>
        <span className={style.title}>Ежемесячный платеж от</span>
        <div className={style.value}>
          000<span>&nbsp;₽</span>
        </div>
      </div>
      <div className={style.finalResultBtn}>
        <button>Оставить заявку</button>
      </div>
    </div>
  );
}

export default FinalResult;