import { getProducts } from '@/lib/mongo/products'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const group = Array.isArray(req.query.group) ? req.query.group[0] : req.query.group
      if (!group) {
        throw new Error('Query parameter "group" is missing or empty!')
      }
      const { products, error } = await getProducts(group)
      if (error) throw new Error(error)

      return res.status(200).json({ products })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed!`)
}

export default handler
