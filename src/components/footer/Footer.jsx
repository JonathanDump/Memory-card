import React from "react";
import footer from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <a className={footer.text} href="https://github.com/JonathanDump">
        Made by Jonathan Dump
      </a>
    </div>
  );
}
