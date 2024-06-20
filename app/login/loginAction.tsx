'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function loginAction(currentState: any,formData: FormData) : Promise<string>{
  
  //GET DATA OFF THE FORM
 
  const userName = formData.get('userName');
  const password = formData.get('password');
  
  
   const rawFormData = {
    userName: userName,
    password: password,
    
  };
// SEND TO OUR API ROUTE 
  const res = await fetch(process.env.ROOT_URL+"/api/login", {
  method: 'POST',
  headers: {
    "Content-Type":"application/json",
  },
  body: JSON.stringify(rawFormData) });

  
  const content= await res.json();

  console.log(content);
  
  cookies().set('Authorization', content.token,{
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: '/',
    sameSite: "strict",
  });

  
  //REDIRECT TO LOGIN x
  if (res.ok){ 
    redirect('/dashboard'); 
  }
  else{
    return content.error;
  }
  

}