import header from "./Header.module.scss";
import React from "react";

export default function Header() {
  return (
    <div className="header.header">
      <div className={header.logo}></div>
      <div className={header.rules}></div>
      <div className={header.scores}>
        <div className={header.best}></div>
        <div className={header.current}></div>
      </div>
    </div>
  );
}
