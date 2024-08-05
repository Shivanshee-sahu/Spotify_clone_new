import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Display_home from './Display_home'
import Display_album from './Display_album'
import { albumsData } from '../assets/assets';

function Display() {
  const displayref=useRef();
  const location=useLocation();
  const isalbum=location.pathname.includes("album");
  const albumId=isalbum?location.pathname.slice(-1):'';
  const bgcolor=albumsData[Number(albumId)].bgColor;
useEffect(()=>{
  if(isalbum){
    displayref.current.style.background=`linear-gradient(${bgcolor},#121212)`
  }
  else{
    displayref.current.style.background="#121212";
  }
})
  return (
    <div ref={displayref} className='w-[100%] m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route element={<Display_home/>} path='/'/>
            <Route element={<Display_album/>} path='/album/:id'/>
        </Routes>
    </div>
  )
}

export default Display