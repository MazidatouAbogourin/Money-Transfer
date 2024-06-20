'use client'
import React, { useEffect } from 'react';
import Header from '@/assets/components/Header';
import Footer from '@/assets/components/Footer';
import { useFormState, useFormStatus } from 'react-dom';
import "@/assets/styles/layout2.css";
import trackingAction from './trackingAction';
function Tracking() {
  const [error, formAction] = useFormState(trackingAction, undefined);
  useEffect(()=>{
    console.log("error is", error)
  }, [error])
  return (
    <div id="container">
      <Header/>
        <div className='w-2/3 text-black font-extralight tracking-tight leading-10 text-left m-auto my-20 p-8'>
        MTP also known Money Transfer and Payment is a web app  that can  be used to transfer money from one account to another. Please enter the tracking Number in the input field below to see the current state of your transfer.
          
          <form action={formAction}>
            <div className="mb-4 ">
              <p className='ml-60 mb-10'></p> 
              <div className="flex flex-wrap items-center ml-60 ">
               <input type="text" className=" appearance-none border-b rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id='trackCode' placeholder='Please enter the tracking code here ****' name='trackCode' />
               <input className=" ml-4  hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border w-12 rounded text-xs text-center bg-green-500" type="submit" value="Go"/>
              </div>
            {error&&<ul style={{marginLeft: "250px", font:'bold', marginTop:'30px'}}>
              <h1 style={{fontWeight:'bold', fontSize:"23px"}}>Details Info</h1>
              <li style={{fontWeight:'bold'}}>Sender: {error.SenderUserName}</li>
              <li style={{fontWeight:'bold'}}> Receiver: {error.receiverUserName}</li>
              <li style={{fontWeight:'bold'}}> Amount: {error.AmountSend}</li>
              <li style={{fontWeight:'bold'}}>Status: {error.Status}</li>
        
              </ul>}
            </div>
          </form>

          


        </div>

      <Footer/>
    </div>
  )
}

export default Tracking
