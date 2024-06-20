import React from 'react';
import Header from '@/assets/components/Header';
import Footer from '@/assets/components/Footer';
import { AiOutlineMail } from "react-icons/ai";
import { GrInfo } from "react-icons/gr";
import { BsPersonFillDash } from "react-icons/bs";
import "@/assets/styles/layout2.css";

function Contact() {
  return (
    <div id='container'>
      <Header/>
      <p className=' w-2/3 text-black font-extralight tracking-tight leading-10 text-left m-auto my-20 shadow p-8'> 
      MTP also known Money Transfer and Payment is a web app design by Mazidatou Abogourin that can  be used to transfer money from one account to another. The database connected to the website will be used to store personal information about users and the records of activities like transfers they have done on the websites. 
      <br/><br/>
      <ul className="list-disc pl-6">
        <li> <BsPersonFillDash size={25} className='inline mr-3'/> Name: Mazidatou ABOGOURIN</li>
        <li> <AiOutlineMail size={20} className='inline mr-3'/>Email: Mazidatou@gmail.com</li>
        <li> <GrInfo size={20} className='inline mr-3 ' />Info: Senior Year Project</li>
      </ul>
      </p>
      

      <Footer/>

    </div>
  )
}

export default Contact
