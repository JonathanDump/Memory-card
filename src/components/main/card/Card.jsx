import React from "react";
import card from "./Card.module.scss";

export default function Card({ image, name }) {
  return (
    <div className={card.card}>
      <div className={card.image}>
        <img src={image} alt={name} />
      </div>
      <div className={card.text}>{name}</div>
    </div>
  );
}
