import {PrismaClient} from '@prisma/client'

declare global {
    namespace globalThis {
        var prismadb:PrismaClient
    }
}

type User={
    id             :number,
    image          :string,
    email         : string ,
    emailVerified : string,
    hashedPassword :string,
    createdAt     : string,
    updatedAt     : string,
    favoriteIds   : String,
}