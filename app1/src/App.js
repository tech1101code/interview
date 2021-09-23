import React , {useState,useEffect} from 'react';
import axios from 'axios';
import Config from './config';
import Blocks from './components/blocks'

function App() {
  const [loading ,setLoading] = useState(true)
  const [error ,setError] = useState(false)
  const [data ,setData] = useState([])
  
  useEffect(()=> {
    axios.get(Config.BASE_URL)
    .then( val => {
      console.log(val)
      setLoading(false);
      if(val.status === 200 && val.data && val.data.success === 1){
        setData(val.data.data.results)
      }
    })
    .catch(err =>{
      setLoading(false);
      setError("Due to server error , could not fetch data")
    });
  },[])
  
  return (
    <div style={{display: 'flex' , width: '100%' , height: '100%' ,justifyContent:'center' , alignItems : 'center',}}>
      {loading 
      ?
      <div 
      style={{
        display: 'flex' , 
        justifyContent:'center' , 
        alignItems : 'center',
        width: '400px' , 
        height: '100px',
        backgroundColor: 'yellowgreen'
      }} > loading ...</div>
      :
      <> 
        {
          error 
          ?
          <div style={{
            display: 'flex' , 
            justifyContent:'center' , 
            alignItems : 'center',
            width: '400px' , 
            height: '100px',
            backgroundColor: '#de9d9d'
          }} >{error}</div>
          :
          <Blocks data={data} />
        }
      </>
      }
    </div>
  );
}

export default App;
