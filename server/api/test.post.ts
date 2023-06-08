import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    // const body = await readBody(event)
    // await useStorage().setItem('redis:test', body)
    // return 'Data is set'
    const body = await readBody(event)

    let user: Prisma.UserCreateInput

    // Check if posts should be included in the query
    user = {
      email: body.email,
      password: body.password,
    }

    return { body }
    // Pass 'user' object into query
    // const createUser = await prisma.user.create({ data: user })

  })
