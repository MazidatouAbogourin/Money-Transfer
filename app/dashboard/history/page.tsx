'use server'
import React from 'react';
import { verifySession } from '../../lib/dal';
import DashHeader from '@/assets/components/DashHeader';
import MainHistory from '@/assets/components/MainHistory';
import  getHistory  from './getHistory';

async function History() {
  const session = await verifySession();
  const getData = await getHistory({userName: session.userName});
  
  

  return(
    <>
    <DashHeader headerInfo={session}/>
     <MainHistory data ={getData}/> 
    </>
  )
}

export default History
