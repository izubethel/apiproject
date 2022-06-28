import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';



const App = () => {

    const[info, setInfo]= useState([]);
      const cardData = async ()=>{
        const infoZ = await axios.get("https://api.github.com/users")
        
        setInfo(infoZ.data)   
      };
      useEffect(()=>{
        cardData();
      },
      []);

    return (
      <div className='cf'>
          <Card userProfile = {info} />
      </div>
    )
}

export default App;