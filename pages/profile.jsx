import React from 'react'
import {getSession} from 'next-auth/react'
import Image from 'next/image'
import useCurrentUser from '../hooks/useCurrentUser'
import profileimage from '../public/images/default-red.png'
import { useRouter } from 'next/router'
export async function getServerSideProps(context){

    const session=await getSession(context)

    if(!session){
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
              }
        }
    }
    return {
        props:{}
    }
}

export default  function Profile() {


  const {data:user}=   useCurrentUser()
  console.log(user);
  

  const router=useRouter()
  return (
    <div className='flex flex-col items-center justify-center text-white h-screen'>
            <h1 className='text-3xl text-white'>Who is watching?</h1>
            <div className='flex flex-col group'
            
            onClick={()=>router.push('/')}>
              <div>

              <Image src={profileimage}
              width={170}
              height={170}
              className='mt-4 group-hover:bg-white
               group-hover:cursor-pointer
               hover:border-white hover:border-2
                transition
               '
              alt='profile '/>
              <p className='text-center mt-5 text-2xl'>  
                {
                 user?.name
                }
              </p>
              </div>
            </div>

    </div>
  )
}
