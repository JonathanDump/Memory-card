import React from "react";
import main from "./Main.module.scss";

export default function Main() {
  return (
    <div className={main.main}>
      <div className={main.board}></div>
    </div>
  );
}
