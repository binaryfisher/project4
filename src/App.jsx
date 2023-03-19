import { useState } from 'react';
import APIPanel from './component/apiPanel';
import BanList from './component/banList';
import Gallery from './component/gallery';
import './App.css';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;


function App() {

  const [result, setResult] = useState({
    name: "",
    weight: "",
    breed_group: "",
    life_span:"",
    img:""
  });

  const [preCats, setPreCats] = useState([]);
  const [banList, setBanList] = useState([]);
  
  const callAPI = async (query) => {
    const response = await fetch(query);
    let json = await response.json();
   
    if(json){
      let cat = {
        name: json[0].breeds[0].name,
        weight:json[0].breeds[0].weight.imperial,
        origin: json[0].breeds[0].origin ,
        life_span:json[0].breeds[0].life_span,
        img: json[0].url
      }
      setResult(cat);
      setPreCats(oldArray => [...oldArray, cat])
    }
  };

  const makeQuery = () => {
    
      let query = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=${ACCESS_KEY}`
  
      callAPI(query).catch();   
    
  }

  const handleBtnClick = (e) =>{
    makeQuery();
    e.preventDefault();
  }

  const handleAddBanList = (e) =>{
     let value = e.target.innerHTML;
     if(value && !banList.includes(value)){
      setBanList(oldList =>[...oldList, value])
     }
  }

  return (
    <div className="App">
      
      
          <Gallery preCats={preCats}/>
          <APIPanel result={result} handleBtnClick={handleBtnClick} handleAddBanList={handleAddBanList}/>
          <BanList banList={banList}/>
         

     

    

    </div>
  )
}

export default App
