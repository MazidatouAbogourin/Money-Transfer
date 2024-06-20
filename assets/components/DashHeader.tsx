"use client"
import { Menu, Popover, Avatar, CogIcon, CircleArrowRightIcon,  } from 'evergreen-ui';
import React from 'react';
import { MdDashboard, MdWorkHistory, MdOutlineAdd  } from "react-icons/md";


function DashHeader(props: any){
  const headerInfo = props.headerInfo;

  return (
    <div>
      <div style={{color: "#F0F0F0", paddingLeft: "100px" , paddingRight: "100px", paddingBottom:"15px", paddingTop:"15px" }} className=' bg-green-600 flex justify-between text-start'> 
      <div><strong>Money Transfer APP</strong></div>
      <div>
        
        <span>
        <Popover
      
      content={
  <Menu>
    <Menu.Group>
      <Menu.Item>Welcome back, {headerInfo.userName}</Menu.Item>
      <Menu.Item> {headerInfo.userType=='Admin'&& <a href='/dashboard/admin'>Admin Mode</a>}</Menu.Item>
      <Menu.Item icon={CogIcon}>Settings</Menu.Item>
      
      
    </Menu.Group>
    <Menu.Divider />
    <Menu.Group>
      <a href='/login'>
      <Menu.Item intent='danger' icon={CircleArrowRightIcon}>
        Log Out
      </Menu.Item>

      </a>
      
    </Menu.Group>
  </Menu>
}
>
<Avatar name={headerInfo.userName} size={35} />
</Popover>
        </span>
      
      

      </div>
        
      </div>
      <div style={{color: "#F0F0F0", backgroundColor:"#386434", paddingTop: "15px", paddingBottom:"15px" }} className='py-4 text-center font-bold' > 
      <span className='pr-10 '> <a href='/dashboard'> <MdDashboard  size={20} style={{display: 'inline'}}/>  Dashboard </a>  </span> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
      <span>  <a href='/dashboard/history'> <MdWorkHistory size={20} style={{display: 'inline',}}/> History </a> </span>
      <span style={{marginLeft: "20px"}}>  <a href='/dashboard/account'> <MdOutlineAdd  size={20} style={{display: 'inline'}}/> Add Money </a> </span>
      </div>
      
    </div>
  )
}

export default DashHeader
