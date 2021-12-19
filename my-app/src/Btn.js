import React from 'react';
import './index.css'


function Btn({callback, BtnText, className1}) {
  return <div>
  <button className = {className1} onClick={callback}>{BtnText}</button>
  </div>
}


export default Btn;
