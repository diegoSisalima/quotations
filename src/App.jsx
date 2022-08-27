import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'
import { useState } from 'react'


function App() {
  const[index, setIndex]=useState(Math.floor(Math.random()*(quotes.length-1)));
  const indexRandom=()=>{
    setIndex(Math.floor(Math.random()*(quotes.length-1)));
  }

  const myColors = ["#FF9570", "#008E9D", "#008F78", "#FF7D64", "#4D8295", "#296173", "#FF6F91", "#3A88A2", "#C34A36", "#008C82"];
  let colorRandom = myColors[Math.floor(Math.random() * (myColors.length - 1))];
 
  document.body.style=`background-color: ${colorRandom}; transition: 1s`;
  return (
    <>
     <QuoteBox index={index} indexRandom={indexRandom} colorRandom={colorRandom}/>
    </>
  )
}

export default App
