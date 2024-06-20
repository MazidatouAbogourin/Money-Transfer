'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/assets/components/Header';
import Footer from '@/assets/components/Footer';
import "@/assets/styles/layout2.css";
import { useFormState, useFormStatus } from 'react-dom';
import signupAction from './signupAction';
import { toaster ,  Button, Pane, Spinner} from 'evergreen-ui';

function SignUp() {
const [error, formAction] = useFormState(signupAction, undefined);
const [loading, setLoading]=useState(false);




useEffect(()=>{
  if(error){
    toaster.danger(error);
    setLoading(false)
  }
 
},[error]);
  

  
  return (
    <div id="container">
      <Header/>
      <div className='w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow  mx-auto my-20'>
        <form action={formAction} className=' bg-white  rounded px-8 pt-6 pb-8 mb-4'  >
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> First Name </label>
              <input type="text" className="appearance-none block w-full  text-gray-700 border  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"   id='firstName' name="firstName" placeholder='Enter your first name' />

            </div>
            <div className="w-full md:w-1/2 px-3 mb-4  md:mb-0">
              <label htmlFor="lastName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Last Name </label>
              <input type="text" className="appearance-none block w-full  text-gray-700 border  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"   id='lastName'   name="lastName" placeholder='Enter your last name'/>

            </div>
          </div>

          <div className="mb-4">
              <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2"> Email</label>
              <input type="Email" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='Email' placeholder='Email ' name="Email"  />
          </div>
          
          <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2"> Username</label>
              <input type="text" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='username' placeholder='username ' name="userName"  />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >
          Password
        </label>
        <input className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name="password"   />
        </div>

        <div className="flex mb-6">
          <div className="mb-2 mx-3">
            <input type="checkbox" name="checkbox"  id="checkEl" />
          </div>
          <div className="mb-2 mx-3">
            <label htmlFor="checkEl" className='text-gray-700 text-sm '>I agree the <a> terms and condition</a></label>
          </div>

        </div>
        <div className="mb-4">
        <input type="submit" value={!loading? "log In" : "loading ..."}  onClick={()=> setLoading(true)}className='bg-green-500 w-full py-2 rounded' />
        </div>
        </form>
        
 
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp
