import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


function Player({PlayerName, curtScore, totalScore, isWon}) {
  let style = {};
  let text = '';
  {if (isWon){
    text += `won the Game!!!!!`
    }
  }
    return (
      <div className="player">
      <div className="playerTitle">
      {PlayerName} {text}
      <div className="currplayer" style={style}></div>
      <br />
      </div>
      <div className="curScore"> {curtScore}</div>
      <button className="totalScore">Score {totalScore}</button>
      </div>
    )
  }


export default Player;
