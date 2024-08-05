import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Album from './Album'
import Songs from './Songs'

function Display_home() {
  return (
<><Navbar/>
<div className='mb-4'>
<h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
<div className='flex overflow-auto'>
{albumsData.map((item,index)=>(<Album key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />

))}
</div>

</div>
<div className='mb-4'>
<h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
<div className='flex overflow-auto'>
{songsData.map((item,index)=>(<Songs key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />

))}
</div>

</div></>
  )
}

export default Display_home