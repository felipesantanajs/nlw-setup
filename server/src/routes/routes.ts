import {FastifyInstance} from 'fastify'
import { prisma } from "../lib/prisma"
export async function appRoutes(app:FastifyInstance){
  app.get('/habits', (req, res) =>{
    const habits  = prisma.habit.findMany()
    return habits
  })
}

