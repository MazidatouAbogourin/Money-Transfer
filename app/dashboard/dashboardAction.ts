'use server'
import { verifySession } from "../lib/dal";
 export async function dashboardAction(currentState: any,formData: FormData) : Promise<String>{
 const receiverName = formData.get('receiver');
 const amountSend= formData.get('amountSend');
 const session = await verifySession();
 const rawFormData = {
  receiverName,
  amountSend,
  senderName: session.userName
 }

 const res = await fetch(process.env.ROOT_URL+"/api/dashboard", {
  method: 'POST',
  headers: {
    "Content-Type":"application/json",
  },
  body: JSON.stringify(rawFormData) });
  
  const content= await res.json();
  if (res.ok){ 
    console.log(`content is ${content.TrackingNumber}`)
    return `You have successfully sent the money. \n Please copy the code "${content.fields.TrackingNumber}". `
  }
  else{
    return  "there was an error while sending check the information you provided"
  }
}
