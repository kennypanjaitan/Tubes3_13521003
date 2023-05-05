import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client/'
const prisma = new PrismaClient()

// POST /api/user
// Required fields in body: name, email
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const result = await prisma.history.create({
      data: {
        question: req.body.messages,
        answer: req.body.answers,
        sessionId: 1,
      }
    })
    res.json(result);
  } else if (req.method === 'GET') {
    const result = await prisma.history.findMany()
    return res.status(200).json(result)
  } else if (req.method === 'DELETE') {
    const result = await prisma.history.deleteMany()
    return res.status(200).json(result)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    )
  }
}