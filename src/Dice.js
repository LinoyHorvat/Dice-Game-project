import React from 'react';
import './index.css'
import Dice0 from "../../my-app/src/img/1.png";
import Dice1 from "../../my-app/src/img/1.png";
import Dice2 from "../../my-app/src/img/2.png";
import Dice3 from "../../my-app/src/img/3.png";
import Dice4 from "../../my-app/src/img/4.png";
import Dice5 from "../../my-app/src/img/5.png";
import Dice6 from "../../my-app/src/img/6.png";

const diceImages = {
  0: Dice0,
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
};

function Dice({diceArr}) {
  return <div className= "dice">
  <img src={diceImages[diceArr[0]]} alt="dice" style={{height: "100px", width: "100px", margin: "auto"}}></img>
  <br />
  <img src={diceImages[diceArr[1]]} alt="dice" style={{height: "100px", width: "100px", margin: "auto"}}></img>
  </div>

}

export default Dice;
