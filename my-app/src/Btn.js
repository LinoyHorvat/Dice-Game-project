import React from 'react';
import './index.css'


function Btn({callback, BtnText}) {
  return <div>
  <button onClick={callback}>{BtnText}</button>
  </div>
}


export default Btn;
