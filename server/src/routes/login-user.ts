import { FastifyInstance } from 'fastify'
import z from 'zod'
import { prisma } from '../lib/prisma'
import AppError from '../utils/AppError'
import { compare } from 'bcryptjs'

export async function LoginUser(app: FastifyInstance) {
  app.post('/login', async (request, reply) => {
    const bodyParams = z.object({
      email: z.string(),
      password: z.string(),
    })

    const { email, password } = bodyParams.parse(request.body)

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new AppError('This user does not exist', 401)
    }

    const matchedPassword = await compare(password, user.password)

    if (!matchedPassword) {
      throw new AppError('This user does not exist', 401)
    }

    return reply.send({ user })
  })
}
