import { fastify } from 'fastify'
import { RegisterUser } from './routes/register-user'
import { LoginUser } from './routes/login-user'
import fastifyCors from '@fastify/cors'
import { register } from 'module'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(RegisterUser)
app.register(LoginUser)

const port = 3333
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`http server running on port ${port}`)
  })
