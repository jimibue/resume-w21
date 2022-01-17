import './App.css';
import {useState, useEffect} from 'react'
import useInterval from './useInterval'

function App() {

  const [xPos, setXPos] = useState(150)
  const [yPos, setYPos] = useState(150)
  const [dY, setDY] = useState(5)
  const [dX, setDX] = useState(5)
  const [countInterval, setCountInterval] = useState(0)
  const [count1, setCount1] = useState(0)

  const updateCount1 = ()=>{
    setCount1(count1 + 1)
  }
  useInterval(updateCount1, 1000)
  

   useEffect(()=>{
    const tick = ()=>{
      setCountInterval((prevState)=> prevState + 1)
      // setYPos((prevState)=> prevState + 10)
     }
    let id = setInterval(tick, 60)
    return ()=>{
       clearInterval(id)
    }
   },[])

   useEffect(()=>{
    setYPos(yPos + dY)
    setXPos(xPos + dX)
   },[countInterval])

   useEffect(()=>{
     if(yPos > 280) {
       setYPos(250)
       setDY(-5)
     }
     if(yPos < 5) {
      setYPos(10)
      setDY(5)
    }
    if(xPos > 280) {
      setXPos(250)
      setDY(-5)
    }
    if(xPos < 5) {
     setXPos(10)
     setDX(5)
   }
   },[xPos, yPos])



  console.log('before return')
  return (
    <div className="App"> 
      <h1>About James Y.</h1>

      <h2>work history</h2>

      <h3>Paper boy</h3>
      <p>work as paper boy 5 years</p>

      <h3>Buser</h3>
      <p>work as paper boy 10 yearsz11sdfsdf11</p>

      <h2>contact</h2>
      <p>linkedin</p>


     <h2>animation: count :{countInterval}</h2>
     <div style={{width:'300px', height:'300px', border:'1px solid black', position:'relative'}}>
       <div style={{position:'absolute', top:yPos, left:xPos}}>dvd</div>
     </div>

     <p>count1: {count1}</p>
  
    </div>
  );
}

export default App;
