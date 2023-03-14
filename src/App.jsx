import { useState } from 'react'
import APIPanel from './component/apiPanel'
import './App.css'
const ACCESS_KEY = import.meta.env.APP_ACCESS_KEY;

function App() {

  const [result, setResult] = useState({
    dated: "Unknown",
    culture: "Unknown",
    division: "Unknown",
    img: ""
  });
  
  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if(json){
      setResult({
        dated: json.records[0].dated,
        culture:json.records[0].culture,
        division: json.records[0].division,
        img: json.records[0].primaryimageurl
      });
    }
  };

  const makeQuery = () => {
    let size = 1;
    let totalRecords = 243296;
    let width = 400;
    let height = 400;
    let page = Math.floor(Math.random() * totalRecords / size)

    let query = `https://api.harvardartmuseums.org/object?apikey=488798f3-8a01-452c-a440-dd37bfa5664f&size=${size}&page=${page}`

    callAPI(query).catch(console.error);
  }

  const handleBtnClick = (e) =>{
    makeQuery();
    e.preventDefault();
  }

  return (
    <div className="App">
      

    <APIPanel result={result} handleBtnClick={handleBtnClick}/>

    </div>
  )
}

export default App
