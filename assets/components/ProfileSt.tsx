'use client'
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { cookies } from 'next/headers';
import { SideSheet, Position, Paragraph, TextInputField, Button,  } from 'evergreen-ui';
import * as jose from 'jose';
import { useState } from 'react';
import { dashboardAction } from '@/app/dashboard/dashboardAction';

export default function ProfileSt({info}: any) {
  const [isShown, setIsShown] = useState(false);
  const [error, formAction] = useFormState(dashboardAction, undefined);
  return (
    <main style={{backgroundColor: "#f8fcfd", height: "100vh", padding:"100px 50px"}}>
      <div className="flex justify-between">
        
        <button className='bg-green-500 w-48 py-2 rounded font-bold text-white' onClick={()=> setIsShown(true)}> +  Make a tranfer
        <SideSheet position={Position.LEFT} isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Paragraph margin={40}> 
        <h4 style={{fontWeight: 'bolder', fontSize:'50px'}}>Transfer Money </h4>
        <form action={formAction}>      
        <TextInputField marginTop={40}
       label="Receiver UserName"
       placeholder="Enter Receiver Username...." name='receiver' />

      <TextInputField marginTop={40}
       label="Amount $"
       placeholder="Enter Amount to send...." type='number' min={1} max={info.balance} name='amountSend'/>
       <input type="submit" value="send" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-5" onClick={(e)=>{
        e.target.value='Sending....'
       }}/>

       
      {error&&<p className='text-green-600 text-center font-bold' style={{marginTop: "25px", color: "green"}}>{error} </p>}
      
 </form> 
  
        </Paragraph>
           </SideSheet>
        </button>
        
        <div className='font-bold text-black'>Amount Available:   $ {info.balance} </div>

      </div>


    </main>
  )
}
