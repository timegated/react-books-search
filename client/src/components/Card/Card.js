import React from 'react';
import style from './Card.module.css';

const Card = props => {
  return (
    <div className={style.card}>
      <div className={style.cardTitle}>
        <h1>{props.name}</h1>
      </div>
      <div className={style.cardContent}>
      </div>
    </div>
  );
};

export default Card;
