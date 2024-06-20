'use server';

export default async function trackingAction(currentState: any, formData: FormData) : Promise<string>{
  
  //GET DATA OFF THE FORM
 
  
  const userCode= formData.get('trackCode');
  
  
   const rawFormData = {
    userCode
   
    
  };
// SEND TO OUR API ROUTE 
  const res = await fetch(process.env.ROOT_URL+"/api/tracking", {
  method: 'POST',
  headers: {
    "Content-Type":"application/json",
  },
  body: JSON.stringify(rawFormData) });

  
  const content= await res.json();
  console.log(content);
  //REDIRECT TO LOGIN x
  if (res.ok){ 
    return content;
  }
  else{
    return content.error;
  }
  

}