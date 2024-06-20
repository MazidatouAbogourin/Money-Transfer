
import { NextResponse } from "next/server";

import bcrypt from 'bcryptjs';
import * as jose from 'jose';
const Airtable = require("airtable");

let base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('apptDJ7yRnoBPv1Dt');
export async function POST (request: Request){
 const body  = await request.json();
 const {receiverName,amountSend,senderName}=body;
 if(receiverName== senderName){
  return NextResponse.json({
    error: "Provide valid username "
  },{
    status: 400

  });
 }
 const customer = await base("Users").select({
  filterByFormula: `AND(userName = "${receiverName}")`
});
const numberOfUsers = await customer.firstPage();
const receiverID= numberOfUsers[0].id
if(numberOfUsers.length==0){
  return NextResponse.json({
    error: "Username does not exist"
  },{
    status: 400

  })
};

const customer2 = await base("Users").select({
  filterByFormula: `AND(userName = "${senderName}")`
});
const numberOfUsers2 = await customer2.firstPage();
const senderID= numberOfUsers2[0].id
console.log(receiverID);
const updateUserData1 = await base("Users").update([{
  id: senderID,
  fields: {
    ...numberOfUsers2[0].fields,
    balance: numberOfUsers2[0].fields.balance-amountSend
  }
}]);


 const updateSender=await base("Users").update([
  {
    id: receiverID,
    fields:{
      ...numberOfUsers[0].fields,
      balance: Number(numberOfUsers[0].fields.balance)+Number(amountSend)
    }
  }

])


const result = Math.random().toString(36);

const tracking= ':code'+result;
const req = await fetch(process.env.AIRTABLE_URL+"Tracking",{
  method:'POST',
  headers:{
   "Authorization": `Bearer ${process.env.AIRTABLE_TOKEN}`,
    'Content-Type': "application/json",
  },

  body: JSON.stringify({fields:{TrackingNumber: tracking, SenderUserName: numberOfUsers2[0].fields.userName, receiverUserName: numberOfUsers[0].fields.userName, AmountSend: Number(amountSend),  SenderNewBalance: Number(numberOfUsers2[0].fields.balance)-Number(amountSend), ReceiverNewBalance: Number(numberOfUsers[0].fields.balance)+Number(amountSend)}})
});
const data = await req.json();


return NextResponse.json(data);
}




