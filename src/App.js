import {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [formula, setformula] =useState("test")
  const [card1, setcard1] =useState(15)
  const [card2, setcard2] =useState(15)
  const [card3, setcard3] =useState(15)
  const [card4, setcard4] =useState(15)
  let cards = [];
    for (let i = 1; i <= 10; ++i) {
      if (i != 10) {
        cards.push(i)
        cards.push(i)
        cards.push(i)
        cards.push(i)
      }
      if (i == 10) {
        for (let i = 0; i <16; ++i) {
          cards.push(10)
        }
      }
    }
    function generateFourCards () {
      setcard1(cards[Math.floor(Math.random()*52)])
      setcard2(cards[Math.floor(Math.random()*52)])
      setcard3(cards[Math.floor(Math.random()*52)])
      setcard4(cards[Math.floor(Math.random()*52)])
      
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {card1}, {card2}, {card3}, {card4} <button onClick={generateFourCards}>pressMe</button><br />
          <input value={formula} onChange={e => setformula(e.target.value)}/> <br />
          <button onClick={()=>alert(eval(formula))} >submit</button>
          Edit <code>src/App.js</code> and save to reload. kdijf 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
