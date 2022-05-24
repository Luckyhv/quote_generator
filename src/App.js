import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [advice,setadvice] = useState("")

  const getadvice=async()=>{
    axios.get("https://api.adviceslip.com/advice").then((response)=>{
      const a = response.data.slip;
      console.log(a.advice);
      setadvice(a.advice);
  })
  }
  
  useEffect(()=>{
    getadvice();
  },[])

  return (
    <div className="App">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={getadvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
