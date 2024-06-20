import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('apptDJ7yRnoBPv1Dt');



export  async function POST(request: Request){
  //GET DATA 
  const body= await request.json();
  console.log(body);
  const {firstName, lastName, Email, userName, password} = body;
  if(!firstName || !lastName|| !Email || !userName|| !password){
    return NextResponse.json({
      error: "Make sure you fill all the form"
    },{
      status: 400
  
    });
  }
//check data
const customer = await base("Users").select({
  filterByFormula: `AND(userName = "${userName}")`
});
const numberOfUsers = await customer.firstPage();
if(numberOfUsers.length>0){
  return NextResponse.json({
    error: "Username already exist"
  },{
    status: 400

  });
}

  const newPassword =bcrypt.hashSync(password, 8); 
  //Send data
  const req = await fetch(process.env.AIRTABLE_URL+"Users",{
    method:'POST',
    headers:{
     "Authorization": `Bearer ${process.env.AIRTABLE_TOKEN}`,
      'Content-Type': "application/json",
    },

    body: JSON.stringify({fields:{firstName, lastName,Email ,userName, password: newPassword, balance: 10 }})
  });

  const data = await req.json();
  return NextResponse.json(data);
}