import React from 'react';
import { useEffect } from 'react';

const Newapi = () => {

  useEffect( ()=>{
    api();
  })
   let api= async()=>{
    let res= await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(await res.json());
   }
   


  }
  



export default Newapi;