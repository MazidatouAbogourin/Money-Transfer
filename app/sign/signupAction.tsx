'use server';
import { redirect } from 'next/navigation';
export default async function signupAction(currentState: any,formData: FormData) : Promise<string>{
  
  //GET DATA OFF THE FORM
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const userName = formData.get('userName');
  const password = formData.get('password');
  const email= formData.get('Email');
  const balance ='0';
   const rawFormData = {
    firstName: firstName,
    lastName: lastName,
    Email: email,
    userName: userName,
    password: password,
    
  };
// SEND TO OUR API ROUTE 
  const res = await fetch(process.env.ROOT_URL+"/api/signup", {
  method: 'POST',
  headers: {
    "Content-Type":"application/json",
  },
  body: JSON.stringify(rawFormData) });

  
  const content= await res.json();
  
  //REDIRECT TO LOGIN x
  if (res.ok){
    redirect('/login');
  }
  else{
    return content.error;
  }
  

}