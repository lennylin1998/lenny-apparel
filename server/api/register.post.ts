import {PrismaClient, Prisma} from '@prisma/client'
import {hash} from 'bcrypt'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    // const body = await readBody(event)
    // await useStorage().setItem('redis:test', body)
    // return 'Data is set'
    const body = await readBody(event)

    const usernameExist: object | null = await prisma.user.findUnique({
      where: {
        username: body.username
      }
    })

    if (usernameExist) {
      return {success: false, msg: "Username Already Exist, Try Another One!"}
    }

    let user: Prisma.UserCreateInput
    // round to encypt
    const saltRounds = 10

    try {
      const hashedPassword = await hash(body.password, saltRounds)
      user = {
        username: body.username,
        password: hashedPassword,
      }
      const createUser = await prisma.user.create({data: user})
      return {createUser}
    } catch (error) {
      return {success: false, msg: error}
    }
  
  })
