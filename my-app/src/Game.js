import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player'
import Btn from './Btn'
import Dice from './Dice'
import './index.css'

const WINNINGSCORE = 100; 

class Game extends React.Component {
  state = {
    curPlayer : 0,
    totalScore: [0, 0],
    curtScore: [0, 0],
    dice: [0,0],
    winningScore: WINNINGSCORE,
    isWon: false,
    };
    newGame = () => {
      this.setState({curPlayer: 0})
      this.setState({totalScore: [0, 0]})
      this.setState({curtScore: [0, 0]})
      this.setState({dice: [0, 0]})
    }

    rollDice2 = () => {
      let randomDice1 = Math.floor(6*Math.random())+1;  
      let randomDice2 = Math.floor(6*Math.random())+1;  
      this.setState({dice: [randomDice1, randomDice2]}, () => {
        this.setCurrentScore();
      })
    }
    setCurrentScore = () => {
      let diceScore = this.state.dice[0] + this.state.dice[1];
      if (diceScore === 12)this.setState({curtScore: [0, 0]})
      else if (this.state.curPlayer === 0){
        this.setState({curtScore: [this.state.curtScore[0] + diceScore, 0]})
      }
      else {
        this.setState({curtScore: [0, this.state.curtScore[1] + diceScore]})
      }
    }
    setTotalScore =() => {
      this.setState({curtScore: [0, 0]})
      if (this.state.curPlayer === 0){
        this.setState({totalScore: [this.state.curtScore[0] + this.state.totalScore[0], this.state.totalScore[1]]}, () => {
          this.setState({curPlayer: 1})
          if (this.state.totalScore[0] >= WINNINGSCORE) {
            this.setState({isWon: true})
            this.newGame();
          };
        })
      }
      else {
        this.setState({totalScore: [this.state.totalScore[0], this.state.curtScore[1] + this.state.totalScore[1]]}, () => {
          this.setState({curPlayer: 0})
          if (this.state.totalScore[1] >= WINNINGSCORE) {
            this.setState({isWon: true})
            this.newGame();
          }
        })
      }
    }

  render() {
    return (
      <div className="continuer">
      <Player PlayerName = "Player1" curtScore = {this.state.curtScore[0]} totalScore = {this.state.totalScore[0]} isWon = {this.state.isWon} />
      <div className="game">
      <Btn BtnText ="NEW GAME" callback = {this.newGame}/>
      <Dice diceArr={this.state.dice}/>
      <Btn BtnText ="ROLL DICE" callback = {this.rollDice2} />
      <Btn BtnText ="HOLD" callback = {this.setTotalScore}/>
      <Btn BtnText ="Final Score = 100" />
      </div>
      <Player PlayerName = "Player2" curtScore = {this.state.curtScore[1]} totalScore = {this.state.totalScore[1]}/>
      </div>
    )
  }
}

export default Game;

