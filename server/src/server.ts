import { fastify } from 'fastify'

const app = fastify()




const port = 3333
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`http server running on port ${port}`)
  })
