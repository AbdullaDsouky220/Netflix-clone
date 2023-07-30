import { NextApiRequest,NextApiResponse } from "next";
import prisma from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!=="GET"){
        res.status(405).end()
    }
    try {
     const {currentUser}=   await serverAuth(req,res);

      const favoriteMovies=await prisma.movie.findMany({
        where:{
            id:{
                in:currentUser?.favoriteIds
            }
        }
      })
       return res.status(200).json(favoriteMovies);

    } catch (error) {
        console.log(error);
        res.status(500).end()
        
    }

}
