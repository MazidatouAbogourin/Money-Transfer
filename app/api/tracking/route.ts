import { NextResponse } from "next/server";
const Airtable = require("airtable");
let base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('apptDJ7yRnoBPv1Dt');



export async function POST(request: Request){
  const body= await request.json();
  console.log("hello")
  const {userCode}= body;
 // look up the user with the data 
 const customer = await base("Tracking").select({
  filterByFormula: `AND( TrackingNumber= "${userCode}")`
});
const numberOfUsers = await customer.firstPage();
console.log(numberOfUsers);
if(numberOfUsers.length==0){
  return NextResponse.json({
    error: "Code does not exist"
  },{
    status: 400

  });
}


 
  return NextResponse.json({
    ...numberOfUsers[0].fields
});
}



