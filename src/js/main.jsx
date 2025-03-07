import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Counter from './components/SecondsCounter';

let seconds = 0
let seconds2 = 0
let seconds3 = 0
let seconds4 = 0
setInterval(() => {

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <div className='container card p-3 mt-5'>
      <Home/>
      <Counter seconds={seconds} seconds2={seconds2} seconds3={seconds3} seconds4={seconds4}/>
      </div>
    </React.StrictMode>,
  )
  
  console.log(seconds, seconds2, seconds3)
  seconds++

  if(seconds > 9)
    return seconds = 0, seconds2++;
  if(seconds2 > 9)
    return seconds2 = 0, seconds3++;
  if(seconds3 > 9)
    return seconds3 = 0, seconds4++;
  if(seconds4 > 9)
    return seconds = 0, seconds2 = 0, seconds3 = 0, seconds4 =0;
}, 1000);

