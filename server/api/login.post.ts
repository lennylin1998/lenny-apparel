import { PrismaClient} from '@prisma/client'
import { compare } from 'bcrypt'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // Check if posts should be included in the query

    // Returns an object or null
    const userPassword: object | null = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
      select: {
        password: true,
      },
    })

    if (!userPassword) {
      return {success: false, msg: "Invalid Username or Password!"}
    }

    try {
      const match = await compare(body.password, userPassword.password);
      if (match) {
        return {success: true, msg: "Login Successful!"}
      } else {
        return {success: false, msg: "Invalid Username or Password!"}
      }
    } catch (error) {
      return {success: false, msg: "Something Went Wrong!"};
    }
  })
