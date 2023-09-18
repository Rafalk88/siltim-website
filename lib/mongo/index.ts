//@ts-nocheck
import { MongoClient, MongoClientOptions } from 'mongodb'

const URL: string | undefined = process.env.MONGODB_URL
const options: MongoClientOptions = {}

if (!URL) throw new Error('Dodaj MongoDB URL do .env.local!')

let client: MongoClient = new MongoClient(URL, options)
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }

  clientPromise = global._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise
