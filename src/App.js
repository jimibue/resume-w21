import './App.css';
import {useState, useEffect} from 'react'
import useInterval from './useInterval'
import axios from 'axios';

function App() {

  const [xPos, setXPos] = useState(250)
  const [yPos, setYPos] = useState(250)
  const [dY, setDY] = useState(4)
  const [dX, setDX] = useState(5)
  const [screenX, setScreenX] = useState(200)
  const [screenY, setScreenY] = useState(300)
  const [countInterval, setCountInterval] = useState(0)
  const [count1, setCount1] = useState(0)
  const [memes, setMemes] = useState([])

  const updateCount1 = ()=>{
    setCount1(count1 + 1)
    // setScreenX(screenX+1)
    // setScreenY(screenY+1)
  }
  useInterval(updateCount1, 1000)
  

   useEffect(()=>{
    getMemes()
    const tick = ()=>{
      setCountInterval((prevState)=> prevState + 1)
      // setYPos((prevState)=> prevState + 10)
     }
    let id = setInterval(tick, 60)
    return ()=>{
       clearInterval(id)
    }
   },[])

   const getMemes = async ()=>{
     try{
       let res = await axios.get('https://heroku-w21.herokuapp.com/api/memes')
       setMemes(res.data)
     } catch(err){
       alert('err')
       console.log(err)
     }
   }

   useEffect(()=>{
    setYPos(yPos + dY)
    setXPos(xPos + dX)
   },[countInterval])

   useEffect(()=>{
     if(yPos > screenY-20) {
       setYPos(screenY-25)
       setDY(-4)
     }
     if(yPos < 0) {
      setYPos(5)
      setDY(4)
    }
    if(xPos > screenX - 30) {
      setXPos(screenX - 35)
      setDX(-5)
    }
    if(xPos < 0) {
     setXPos(5)
     setDX(5)
   }
   },[xPos, yPos])



  console.log('before return')
  return (
    <div className="App"> 
      <h1>About James Y.</h1>
      {JSON.stringify(memes)}
      <h2>work history</h2>

      <h3>Paper boy</h3>
      <p>work as paper boy 5 years</p>

      <h3>Buser</h3>
      <p>work as paper boy 10 yearsz11sdfsdf11</p>

      <h2>contact</h2>
      <p>linkedin</p>


     <h2>animation: count :{countInterval}</h2>
     <h2>dX: {dX}, dy:{dY}</h2>
     <div style={{width:`${screenX}px`, height:`${screenY}px`, border:'1px solid black', position:'relative', margin:'auto'}}>
       <div style={{position:'absolute', top:yPos, left:xPos}}>dvd</div>
     </div>

     <p>count1: {count1}</p>
  
    </div>
  );
}

export default App;
