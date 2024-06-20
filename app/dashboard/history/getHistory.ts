'use server'
import React from 'react';
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import * as jose from 'jose';
const Airtable = require("airtable");
let base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('apptDJ7yRnoBPv1Dt');
export default async function getHistory (data: any){
  
 
  const dataInfo = await base('Tracking').select(
    {
      filterByFormula: `or( receiverUserName= "${data.userName}", SenderUserName= "${data.userName}")`

    }
  ).firstPage();


const list = dataInfo.map((track:any)=>{
  if(track.fields.SenderUserName== data.userName){
    return {...track.fields, type:'sending'}
  }
  return track.fields}
)

console.log(list)

  return list;
}

