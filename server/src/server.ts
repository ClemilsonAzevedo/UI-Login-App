import { fastify } from 'fastify'
import { RegisterUser } from './routes/register-user'

const app = fastify()
app.register(RegisterUser)


const port = 3333
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`http server running on port ${port}`)
  })
