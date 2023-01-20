import Fastify from 'fastify'
import cors from '@fastify/cors'
import {prisma} from './lib/prisma'


const app = Fastify()
app.register(cors)



app.get('/habits', (req, res) =>{
  const habits  = prisma.habit.findMany()
  return habits
})


app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err)
  }
  console.log(`Server listening at ${address}`)
})