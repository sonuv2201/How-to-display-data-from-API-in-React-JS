import React from 'react';
import { useState, useEffect } from 'react';

 const App = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((json) => setData(json));
    },[])
  return (
    <div className='wrapper'>
        <h2>My Data</h2>
        <div className='container'>
            {
                data.map((item)=> <DisplatData myData={item} key={item.id} /> )
            }
        </div>
    </div>
  )
}

export default App;
 
const DisplatData =(props) =>{
    const {title,body} = props.myData;
    return(
        <div className='dataitem'>
            <h2>{title}</h2>
            <div>{body}</div>
        </div>
    )
}