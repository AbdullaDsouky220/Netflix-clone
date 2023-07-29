import {getServerSession} from 'next-auth'
import prisma from '../lib/prismadb'
import {authOptions} from '../pages/api/auth/[...nextauth]'
const serverAuth=async(res,req)=>{

    const session=await getServerSession(req,res,authOptions)

    if(!session?.user?.email){
        throw new Error('you are not sign in')
    }

    const currentUser=await prisma.user.findUnique({
        where:{
            email:session?.user?.email
        }
    })
    if(!currentUser){
        throw new Error('you are not sign in')
    }
    return {
        currentUser
    }


}
export default serverAuth