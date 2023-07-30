import { NextApiRequest,NextApiResponse } from "next/types";

import prisma from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";


export default async function handler(req:NextApiRequest,res:NextApiResponse){
try {
      //POST Route
      if(req.method==='POST'){
        const {movieId}=req.body
        const {currentUser}=await serverAuth(req,res)

        //check is the movie is existed
        const existingMovie=await prisma.movie.findUnique({
            where:{
                id:movieId
            }
        })
        if(!existingMovie){
            throw new Error('no movie found please try again with a valid one')
        }

        //getting movies list 
        //push the movie to the list

        const user=await prisma.user.update({
            where:{
                email:currentUser?.email || ''
            },data:{
                favoriteIds:{
                    push:movieId
                }
            }
        })
        res.status(200).json(user)

        

    }

    //Delete route
    if(req.method==='DELETE'){
        const {movieId}=req.body
        const {currentUser}=await serverAuth(req,res)

        //check is the movie is existed
        const existingMovie=await prisma.movie.findUnique({
            where:{
                id:movieId
            }
        })
        if(!existingMovie){
            throw new Error('no movie found please try again with a valid one')
        }

        //remove the movie to the list
        const updatedFavoriteIds=await without(currentUser.favoriteIds, movieId);
       
        const updatedUser=await prisma.user.update({
            where:{
                email:currentUser?.email || ''
            },data:{
                favoriteIds:updatedFavoriteIds

            }
        })
        res.status(200).json(updatedUser)

        

    }

    return res.status(405).end
} catch (error) {
    console.log(error);

    return res.status(500).end();
}
      

}