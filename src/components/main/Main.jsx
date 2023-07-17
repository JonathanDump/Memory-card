import React, { useEffect, useState } from "react";
import main from "./Main.module.scss";
import Card from "./card/Card";
import { handleClick } from "../../functions";

export default function Main({ cards, ...restProps }) {
  console.log(restProps);
  return (
    <div className={main.main}>
      <div className={main.board}>
        {cards.map((card, i) => (
          <Card
            image={card.image}
            name={card.name}
            key={i}
            handleClick={handleClick}
            restProps={restProps}
          />
        ))}
      </div>
    </div>
  );
}
