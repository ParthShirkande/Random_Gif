import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag,settag]=useState('car');
  // const [gif,setgif]=useState('')
  // const [loading,setLoading]=useState("false")

  // async function fetchData() {
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data}=await axios.get(url);
  //   const imageSource =data.data.images.downsized_large.url;
  //   // console.log(imageSource)
    
  //   setgif(imageSource);
  //   setLoading(false);
  // }

  //useeffect used for async function 
  // useEffect(()=>{
  //   fetchData();
  // },[])
  

  const {gif,loading,fetchData}=useGif(tag);


  function clickHandler(){
    fetchData();
  }

  // function changeHandler(event){
  //   settag(event.target.value);
  // }
 return (
 <div className='w-1/2  flex flex-col  bg-blue-500 rounded-lg border-4 border-blue-200 items-center mt-[15px] gap-y-5' >
  
  <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag}</h1>
  
  {
    loading ? (<Spinner/>):(<img src = {gif} width="450"/>)
  }

  <input className='outline outline-2 w-10/12  outline-blue-200 text-center outline-offset-0 focus:outline-yellow-200 p-2 rounded-lg'
  // onChange={changeHandler}
  //another way
  onChange={(event)=>settag(event.target.value)}
  value={tag}/>


  <button onClick={clickHandler} className='w-10/12 mb-[15px] bg-yellow-500 text-lg py-5 rounded-lg'>Generate</button>
 </div>)
}

export default Tag