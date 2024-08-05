import React, { useContext } from 'react';
import Home from './components/Home';
import './index.css';
import Player from './components/Player';
import Display from './components/Display';
import { Playercontent } from './context/Playercontent';

function App() {
  const {audioRef,track}=useContext(Playercontent);
  return (

    <div className="h-screen bg-black">
    <div className='h-[90%] flex'>
<Home/>
<Display/>
    </div>
   <Player/>
<audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App;
