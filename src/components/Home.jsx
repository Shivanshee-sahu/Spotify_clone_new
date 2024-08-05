import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')}  className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt='Home Icon' />
          <p className='font-bold '>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt='Home Icon' />
          <p className='font-bold '>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] rounded h-[85%]'>
      <div className='p-4 flex item-center justify-between'>
        <div className='flex items-center gap-3'>
<img src={assets.stack_icon} className='w-8'></img>
<p className='font-semibold'>Your Library</p>
        </div>
        <div className='flex items-center gap-3'>
<img src={assets.arrow_icon} className='w-3'></img>
<img src={assets.plus_icon} className='w-3'></img>
        </div>
      </div>
<div className='p-4 bg-[#242424] m-2 rounded font-seminbold flex flex-col items-start justify-start gap-1 pl-4'>
<h1>Create Your First Playlist</h1>
<p className='font-light'>
It's easy we will help you
</p>
<button className='px-4 py-1.5 bg-white text-[15px] text-black rounded font-medium rounded-full mt-4'>Create Playlist</button>
</div>
<div className='p-4 bg-[#242424] m-2 rounded font-seminbold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
<h1>let's find some podcasts to follow</h1>
<p className='font-light'>
We'll keep you update on new episodes 
</p>
<button className='px-4 py-1.5 bg-white text-[15px] text-black font-medium rounded rounded-full mt-4'>Browse Podcast</button>
</div>
      </div>
    </div>
  );
}

export default Home;
