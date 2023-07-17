import { CARDS } from "./assets/1cards";

export function shuffleCards() {
    const res = [];
    let cards = [...CARDS];
    while (cards.length) {
      const index = Math.floor(Math.random() * cards.length);
      res.push(cards.splice(index, 1));
    }
    return res.flat();
}
  
export function handleClick({ best, setBest, current, setCurrent, name }) {
    console.log('name', name);
    if (current.includes(name)) {
        setCurrent([])
        return
    }
    // if (best < current.length) {
    //     setBest(current.length + 1)
    // }

    setCurrent([...current, name])
}