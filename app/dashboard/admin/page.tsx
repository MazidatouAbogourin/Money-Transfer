'use server'
import React from 'react'
import '@/assets/styles/adminPge.css'
import { getNumberofTranfer, getNumberofUsers } from '../../lib/dal'

async function adminPage() {
  const numberofUsers = await getNumberofUsers();
  const numberofTranfer = await getNumberofTranfer()
  return (
    <>
    <div style={{color: "#F0F0F0", paddingLeft: "100px" , paddingRight: "100px", paddingBottom:"15px", paddingTop:"15px" }} className=' bg-green-800 flex justify-between text-start'> 
      <div><strong>Money Transfer APP</strong></div>
    <div><a href='/login'>Log out</a></div>
    </div>
    <div style={{display: "flex", }}>
      <div style={{width: "150px", color: "#F0F0F0", height:"100vh", paddingTop: "40PX"}} className='bg-green-600'>
        <ul style={{}}>
          <li style={{borderLeft: '5px solid green', backgroundColor:'#386434'}} ><a href='/dashboard/admin' >Overview</a></li>
          <li ><a href='/dashboard/admin/users'>Users</a></li>
          <li ><a href='/dashboard/admin/tracking'>Tracking</a></li>
          <li ><a href='/dashboard'>User Mode</a></li>
        </ul>
      </div>

      <div style={{flex: 1, backgroundColor:'#f0f8ff'}}>
          <h1 id="stats"> Overview </h1>
        <div id="wrapper">
          <div className='card' style={{backgroundColor: "#00bfff"  }}> <h4>Total Number of Users</h4>
          <h1>{numberofUsers} </h1>
           </div>
          <div className='card' style={{backgroundColor:"#00cc67"}}> 
          <h4>Total Number of Transfers</h4>
          <h1>{numberofTranfer} </h1></div>

          <div className='card' style={{backgroundColor:"#ffd405"}}> 
          <h4>Active Users</h4> 
          <h1>1 </h1>
          </div>
          
        </div>

        <h1 id='stats'>Stats</h1>
        {/* <img src='/piechart.png' alt="pie chart" style={{margin:"50px"}}/> */}
      </div>


    </div>
    </>
  )
}

export default adminPage
