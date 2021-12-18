import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

// class Game extends React.Component {
//   state = {
//     curPlayer : 1
//   }
//   render() {
//     return (
//       <div>
//       <button>NEW GAME</button>
//       <button>ROLL DICE</button>
//       <button>HOLD</button>
//       <button>Final Score = 100 </button>
//       </div>
//     )
//   }
// }

ReactDOM.render(
    <Game />,
  document.getElementById('root')
);