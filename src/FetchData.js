import { useState, useEffect } from "react";
import jsondata from './data.json'
export default function useFetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsondata)
  }, [])
  return data;
}