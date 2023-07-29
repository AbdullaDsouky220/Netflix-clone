import { NextApiRequest,NextApiResponse } from "next";
import prisma from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!=="GET"){
        res.status(405).end()
    }
    try {
        await serverAuth;

       const moviesCount  =await prisma.movie.count()

       const randomIndex=Math.floor(Math.random()*moviesCount)
       const randomMovies=await prisma.movie.findMany({
        take: 1,
      skip: randomIndex
       })
       return res.status(200).json(randomMovies[0]);

    } catch (error) {
        console.log(error);
        res.status(500).end()
        
    }

}
