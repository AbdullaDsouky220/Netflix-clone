import prisma from '@/lib/prismadb'

import bcrypt from 'bcrypt'
import { NextApiResponse } from 'next'


export  default  async function   POST (request,res){
    const body=await  request.body
    const {
        name,email,password
    }=body
    const isExist = await prisma.user.findUnique({
        where: { email },
        select: { email: true }
    })


    if(isExist) {
        return res.status(200).json('Email already exists')
    }

    const hashedPassword = await  bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });
    return    res.status(200).json(newUser)

}