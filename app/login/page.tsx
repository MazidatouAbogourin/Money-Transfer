'use client'
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import {Spinner, toaster} from 'evergreen-ui';
import Header from '@/assets/components/Header';
import Footer from '@/assets/components/Footer';
import "@/assets/styles/layout2.css";
import loginAction from './loginAction'


function Login() {
  const [error, formAction] = useFormState(loginAction, undefined);
  const [loading, setLoading]=useState(false);
  useEffect(()=>{
   if(error){
    toaster.danger(error);
   setLoading(false);
   }
   
  },[error]);
  return (
    <div id='container'>
      <Header/>
      <div className='w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow  px-8 pt-6 pb-8 m-auto' > 
        <form action={formAction}>
        
         <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2"> Username</label>
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='username' placeholder='username ' name='userName'/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password </label>
            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password'/>
          </div>
          
          <div className="flex items-center justify-between">
            <input type='submit' className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  value={!loading? "log In" : "loading ..."} onClick={()=> setLoading(true)}/>
           <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/forgetPage" >Forgot Password? </a>
          </div>


        </form>

      </div>


      <Footer/>
      
    </div>
  )
}

export default Login
