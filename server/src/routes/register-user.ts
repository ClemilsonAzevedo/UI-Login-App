import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import AppError from '../utils/AppError'
import { hash } from 'bcryptjs'

export async function RegisterUser(app: FastifyInstance) {
  app.post('/register', async (request, reply) => {
    const bodyParams = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    })

    const { name, email, password } = bodyParams.parse(request.body)

    const checkIfEmailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (checkIfEmailExists) {
      throw new AppError('This user already exists')
    }

    const hashedPassword = await hash(password, 8)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return reply.status(201).send()
  })
}
