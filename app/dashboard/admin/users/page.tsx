'use server';
import React from 'react';
import '@/assets/styles/adminPge.css';
import { getUsers } from '@/app/lib/dal';
import UserTable from '@/assets/components/UserTable';
async function adminUser() {
  const getData = await getUsers();
  
  return (
    <>

<div style={{color: "#F0F0F0", paddingLeft: "100px" , paddingRight: "100px", paddingBottom:"15px", paddingTop:"15px" }} className=' bg-green-800 flex justify-between text-start'> 
      <div><strong>Money Transfer APP</strong></div>
    <div><a href='/login'>Log out</a></div>
    </div>
    <div style={{display: "flex", }}>
      <div style={{width: "150px", color: "#F0F0F0", height:"100vh", paddingTop: "40PX"}} className='bg-green-600'>
        <ul>
          <li ><a href='/dashboard/admin'>Overview</a></li>
          <li style={{borderLeft: '5px solid green', backgroundColor:'#386434'}} ><a href='/dashboard/admin/users'>Users</a></li>
          <li ><a href='/dashboard/admin/tracking'>Tracking</a></li>
          <li ><a href='/dashboard'>User Mode</a></li>
        </ul>
      </div>

      <div style={{flex: 1, backgroundColor:'#f0f8ff'}}>
          <h1 id="stats">Users</h1>

          <UserTable data ={getData}/> 

          {/* <table>
            <thead>
              <tr> 
                <th>Last Name</th>
                <th>First  Name</th>
                <th> UserName</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any)=>(
                <tr style={{margin: "10px"}}>
                  <td>{user.fields.lastName}</td>
                  <td>{user.fields.firstName}</td>
                  <td>{user.fields.userName}</td>
                  <td>{user.fields.Email}</td>
                  <td>${user.fields.balance}</td>
                </tr>
              ))}

            </tbody>
          </table> */}
       
      </div>

    </div>
      
    </>
  )
}

export default adminUser
