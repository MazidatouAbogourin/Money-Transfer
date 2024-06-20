'use server'
const Airtable = require("airtable");
import { cookies } from 'next/headers';
import * as jose from "jose";
let base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('apptDJ7yRnoBPv1Dt');


 
export const verifySession = async () => {
  const cookie = cookies().get('Authorization')?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
 

  const { payload } = await jose.jwtVerify(cookie, secret, {
    algorithms: ['HS256'],
  });

  return payload;
}
 

export const getNumberofUsers = async()=>{
  
  const customer = await base("Users").select();
  const numberOfUsers = await customer.firstPage();
  return numberOfUsers.length;
}

export const getUsers = async()=>{
  
  const customer = await base("Users").select();
  const numberOfUsers = await customer.firstPage();
  const list= numberOfUsers.map((user:any)=> user.fields);
  return list
}



export const getNumberofTranfer= async()=>{
  const customer = await base("Tracking").select();
  const numberOfTransfer = await customer.firstPage();
  return numberOfTransfer.length;
}

export const getTranfers= async()=>{
  const customer = await base("Tracking").select();
  const numberOfTransfer = await customer.firstPage();
  const list= numberOfTransfer.map((user:any)=> user.fields);
  return list
}

