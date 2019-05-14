import React, { useState, useEffect } from "react";
import "./App.css";
import useFetch from "./FetchData.js";
import useWindowSize from './DeviceDimension.js';

function App() {
  const jsondata = useFetch();
  const [data, setData] = useState([]);
  let windowSize = useWindowSize();
  useEffect(()=>{
    setData(jsondata)
  },[jsondata]);

  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          
        </div>
        <button
          onClick={() => {
            console.log(windowSize)
          }}
        >
          Get dimension
        </button>
      </header>
    </div>
  );
}

export default App;
