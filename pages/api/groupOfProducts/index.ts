import { getGroupOfProducts } from '@/lib/mongo/groupOfProducts'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { groupOfProducts, error } = await getGroupOfProducts()
      if (error) throw new Error(error)

      return res.status(200).json({ groupOfProducts })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed!`)
}

export default handler
