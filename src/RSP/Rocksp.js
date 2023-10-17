import Sidenav from '../navigation/Sidenav'
import './Rocksp.css';
import Title from './Title';
import Result from './Result';
import Scissors from './Scissors';
import Rock from './Rock';
import Paper from './Paper';



import React, { useState } from 'react';

const choices = ['가위', '바위', '보'];


function Rocksp() {
  const [result, setResult] = useState('');
  const [player2, setPlayer2] = useState(0);
  const [com2, setCom2] = useState(0);

// let player2 = 0, com2 = 0;

   function click (player) {
    setPlayer2(player);
    const com = parseInt(Math.random() * 3);
    setCom2(com);
    if( (player + 1) % 3 == com){
      setResult('당신이 졌습니다.');
    } else if (player == com){
      setResult('비겼습니다.');
    } else {
      setResult('당신이 이겼습니다.');
    }

     console.log(`Rocksp click: ${player}`);
   }

return (
<div className="Rocksp">
<Sidenav/>
<Title />
<Scissors click={click} />
<Rock click={click} />
<Paper click={click} />
<Result result = {result} player={choices[player2]} com={choices[com2]}/>

</div>
);
}
export default Rocksp;
