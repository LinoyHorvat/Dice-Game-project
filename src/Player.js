import React from 'react';
import './index.css'


function Player({PlayerName, curtScore, totalScore, isWon, curPlays}) {
  let style = {};
  let text = '';
  if (isWon) text = `won the Game!!!!!`
  if (!curPlays) style = {display: 'none'};
    
    return (
      <div className="player">
      <div className="playerTitle">
      {PlayerName} {text}
      <div className="curPlays" style={style}></div>
      </div>
      <div className="curScore"> {curtScore}</div>
      <button className="totalScore">Score {totalScore}</button>
      </div>
    )
  }


export default Player;
