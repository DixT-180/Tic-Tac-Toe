
import {  useState,useEffect } from 'react';

import './App.css';
import Square from './square';
import Winner from './Winner';


function App() {


const [state,setState] = useState([null,null,null,null,null,null,null,null,null])
const[xTurn,setxTurn] = useState(true)
const[index,setIndex] = useState()






  const handleClick = (index)=>{
    // setState(state[index]='x')
    
    const copyState= [...state]
    copyState[index] = xTurn ? 'X':'O'
    setState(copyState)
    setxTurn(!xTurn)
    
    console.log(index,'--> index')
    setIndex(index)
    console.log(state)
    console.log(state.filter(s => s === null).length)




  }












  // const drawCheck = (state)=>{

  //   if(state.filter(s => s === null).length === 0) {
  //   // Check if there are no more empty squares left
  //    return 'draw'
  // }
  // }


  const WinnerCheck=()=>{
    const checkArray=[[0 ,1, 2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

  
  ];



  for(let logic of checkArray){
    const [a,b,c] =logic;
    if(state[a] !== null && state[a]===state[b] && state[b]===state[c] && state[c]=== state[a]    ) {


  return true;
    } 



  }


  }


const playerWinner = (index)=>{
  if(state[index]==='X'){
    return "X is Winner"
  }
  else if(state[index]==='O'){
    return "O is Winner"
  }


  

}


  return (



  <div className="App">



      <div className='board-container' >

{WinnerCheck()? (


<>
<div className='Result'><Winner win = {playerWinner(index) }/> </div>


</>


):( 
<>
<div className='board-row'>
        <div onClick={()=>{handleClick(0)}}  > <Square symbol = {state[0]}  /></div>
         <div onClick={()=>{handleClick(3)}}><Square  symbol = {state[3]}    /></div>
          <div onClick={()=>{handleClick(6)}} ><Square symbol = {state[6]}    /></div>
        
      </div>
       <div className='board-row'>
      <div onClick={()=>{handleClick(1)}}><Square symbol = {state[1]}   /></div>
         <div onClick={()=>{handleClick(4)}}><Square symbol = {state[4]}   /></div>
          <div onClick={()=>{handleClick(7)}}><Square symbol = {state[7]}    /></div>

      </div>
       <div className='board-row'>
      <div onClick={()=>{handleClick(2)}}><Square symbol = {state[2]}     /></div>
         <div onClick={()=>{handleClick(5)}}><Square symbol = {state[5]}   /></div>
          <div onClick={()=>{handleClick(8)}}><Square  symbol = {state[8]}   /></div>
        

      </div>
       
      </>)}

 
      </div>
      <button onClick={()=>{setState([null,null,null,null,null,null,null,null,null])}}>Reset</button>

    </div>
    
  );
}

export default App;
