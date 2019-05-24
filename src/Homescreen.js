import React, { useState, useEffect } from "react";
import useFetch from "./FetchData.js";
import useWindowSize from "./DeviceDimension.js";
import { Link } from "react-router-dom";

import "./App.css";
function Homescreen() {
  const jsondata = useFetch();
  const [data, setData] = useState([]);
  let windowSize = useWindowSize();
  useEffect(() => {
    setData(jsondata);
  }, [jsondata]);

  return (
    <div>
      <header className="App-header">
        <span>Window's Dimensions</span>
        <br />
        <span>
          Inner Height: {windowSize.innerHeight} Inner Width:{" "}
          {windowSize.innerWidth} Outer Height: {windowSize.outerHeight} Outer
          Width: {windowSize.outerWidth}
        </span>
        <Link to="/hoc">
          <button className="favorite styled" type="button">
            Go to HOC
          </button>
        </Link>
        <Link to="/reducer">
          <button className="favorite styled" type="button">
            Go to useReducer
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Homescreen;
