import { NextResponse } from "next/server";

import bcrypt from 'bcryptjs';
import * as jose from 'jose';
const Airtable = require("airtable");

const token = 'patwGENzv6v9W68yl.2df2bca96b5fc7be5cc65d7e6df74da0a3dac07bd91c25679fa6c1fc09466726';
let base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('apptDJ7yRnoBPv1Dt');



export async function POST(request: Request){
  const body= await request.json();
  const {userName, password}= body;
 // look up the user with the data 
 const customer = await base("Users").select({
  filterByFormula: `AND(userName = "${userName}")`
});
const numberOfUsers = await customer.firstPage();
console.log(numberOfUsers);
if(numberOfUsers.length==0){
  return NextResponse.json({
    error: "Invalid UserName or Password"
  },{
    status: 400

  });
}

const isCorrect = bcrypt.compareSync( password, numberOfUsers[0].fields.password);
if(!isCorrect){
  return NextResponse.json({
    error: "Invalid UserName or Password"
  },{
    status: 400

  });

}
// sessionStorage.setItem('user', numberOfUsers[0].fields);
const secret = new TextEncoder().encode(process.env.JWT_SECRET)
const alg = 'HS256'

const jwt = await new jose.SignJWT( numberOfUsers[0].fields)
  .setProtectedHeader({ alg })
  .setExpirationTime('72h')
  .setSubject(numberOfUsers[0].fields.userName)
  .sign(secret)

 
  return NextResponse.json({
    token: jwt,
    field: numberOfUsers[0].fields
  });
}



