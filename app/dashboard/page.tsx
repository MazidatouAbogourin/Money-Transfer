'use server'
import { verifySession } from '../lib/dal';
import DashHeader from '@/assets/components/DashHeader';
import ProfileSt from '@/assets/components/ProfileSt';

async function dashboard() {
  
  const session = await verifySession();
      
    if(session.userName){

      return(
        <>
        <DashHeader headerInfo={session}/>
        <ProfileSt info={session}/>

        </>
      )
    }
 
}

export default dashboard
