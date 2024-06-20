'use server'
import React from 'react'
import '@/assets/styles/adminPge.css';
import { getTranfers } from '@/app/lib/dal'; 
import TransferTable from '@/assets/components/TransferTable';

 async function tracking() {
  const getData = await getTranfers();
  console.log(getData);
  return (
    <div>
      <div style={{color: "#F0F0F0", paddingLeft: "100px" , paddingRight: "100px", paddingBottom:"15px", paddingTop:"15px" }} className=' bg-green-800 flex justify-between text-start'> 
      <div><strong>Money Transfer APP</strong></div>
    <div><a href='/login'>Log out</a></div>
    </div>
    <div style={{display: "flex", }}>
      <div style={{width: "150px", color: "#F0F0F0", height:"100vh", paddingTop: "40PX"}} className='bg-green-600'>
        <ul>
          <li ><a href='/dashboard/admin'>Overview</a></li>
          <li  ><a href='/dashboard/admin/users'>Users</a></li>
          <li style={{borderLeft: '5px solid green', backgroundColor:'#386434'}}><a href='/dashboard/admin/tracking'>Tracking</a></li>
          <li ><a href='/dashboard'>User Mode</a></li>
        </ul>
      </div>

      <div style={{flex: 1, backgroundColor:'#f0f8ff'}}>
          <h1 id="stats">Transfer</h1>
          <TransferTable data={getData}/>

      
    </div>

    </div>

    </div>
  )
}

export default tracking
