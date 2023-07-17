import { useState, useEffect } from "react";
import app from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";
import { shuffleCards } from "./functions";

function App() {
  const [best, setBest] = useState(0);
  const [current, setCurrent] = useState([]);

  const [cards, setCards] = useState(shuffleCards());

  useEffect(() => {
    setCards(shuffleCards());
    if (best < current.length) {
      setBest(current.length);
    }
  }, [current]);

  console.log(cards);
  return (
    <div className={app.app}>
      <Header best={best} current={current.length} />
      <Main
        cards={cards}
        best={best}
        setBest={setBest}
        current={current}
        setCurrent={setCurrent}
      />
      <Footer />
    </div>
  );
}

export default App;
