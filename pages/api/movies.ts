import { NextApiRequest,NextApiResponse } from "next";
import prisma from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!=="GET"){
        res.status(405).end()
    }
    try {
        await serverAuth;

      const movies=await prisma.movie.findMany()
       return res.status(200).json(movies);

    } catch (error) {
        console.log(error);
        res.status(500).end()
        
    }

}
