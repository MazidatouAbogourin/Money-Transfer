import Image from "next/image";
import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import { AiOutlineMail } from "react-icons/ai";
import { GrInfo } from "react-icons/gr";
import { BsPersonFillDash } from "react-icons/bs";
 import "@/assets/styles/layout2.css";
 import image1 from "@/assets/images/image1.jpg"

export default function Home() {
  return (
    <div id="container">
     <Header/>
     <main className="text-black mb-20">
      <div className="w-full h-96 bg-green-400 mb-5 pl-10">
       <div className="w-3/4  mx-auto flex ">
        
        <div className="flex-1 ml-9 p-10 mx-auto">
          <div className="text-5xl ml-9  font-extrabold leading-10 mt-10 tracking-wide "> 
          MONEY TRANSFER APP
          </div>
          
          <div className="ml-9 text-black font-extralight tracking-tight mt-5 w-full mx-auto">MTP  is a web app  that can  be used to transfer money from one account to another. 
         
          <br />
          <div className="">
            <input type="text" className="mr-5 appearance-none border-b rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96" placeholder="Enter your code..."/>
          <button className="mt-3 bg-amber-200 text-black rounded-s-* font-bold">start here</button>

          </div>
          


          </div>
          


        </div>
       </div>
       
      </div>
      

   <div className=" text-center mt-10">
    <div className="w-3/4 p-8 mx-auto">
      <h4 className="mb-10">Our Services </h4>
      <div className="flex align justify-betwen">
        <div className=" shadow p-5 text-left mr-6 rounded hover:bg-green-500 hover:text-white">
        MTP also known Money Transfer and Payment is a web app  that can  be used to transfer money from one account to another. 

        <div className="text-right mt-10"> <button className="bg-yellow-300 text-black rounded-s-* font-bold">START</button></div>
        
        </div>

        <div className=" shadow p-5 text-left mr-6 rounded hover:bg-green-500 hover:text-white">
        MTP also known Money Transfer and Payment is a web app  that can  be used to transfer money from one account to another. 
        <div className="text-right mt-10"> <button className="bg-yellow-300 text-black rounded-s-* font-bold">START</button></div>
        

        </div>
        <div className="shadow p-5 text-left rounded hover:bg-green-500 hover:text-white">
        MTP also known Money Transfer and Payment is a web app  that can  be used to transfer money from one account to another. 
        <div className="text-right mt-10"> <button className="bg-yellow-300 text-black rounded-s-* font-bold">START</button></div>
        
        </div>
      </div>
      
    </div>
   </div>

   
   <div className="  mt-10">
    <div className="w-3/4 mx-auto">
      <h4 className=" text-center">About Us</h4>
      <p className='tracking-tight leading-10 text-left m-auto mb-10  p-8 '> 
      MTP also known Money Transfer and Payment is a web app design by Mazidatou Abogourin that can  be used to transfer money from one account to another. The database connected to the website will be used to store personal information about users and the records of activities like transfers they have done on the websites. 
      <br/><br/>
      <ul className="list-disc pl-6">
        <li> <BsPersonFillDash size={25} className='inline mr-3'/> Name: Mazidatou ABOGOURIN</li>
        <li> <AiOutlineMail size={20} className='inline mr-3'/>Email: Mazidatou@gmail.com</li>
        <li> <GrInfo size={20} className='inline mr-3 ' />Info: Senior Year Project</li>
      </ul>
      </p>
    </div>
   </div>
      
     
      </main>
     
     <Footer/>
    </div>
  );
}
