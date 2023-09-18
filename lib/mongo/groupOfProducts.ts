import clientPromise from './index'

let client
let db: any
let siltim: any

const init = async () => {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db('siltim')
    siltim = await db.collection('groupOfProducts')
  } catch (error) {
    throw new Error('Brak połączenia z bazą danych!')
  }
}

;(async () => {
  await init()
})

export const getGroupOfProducts = async () => {
  try {
    if(!siltim) await init()
    const result = await siltim
      .find({})
      .map((product: any) => ({ ...product, _id: product._id.toString() }))
      .toArray()

      return { groupOfProducts: result }
  } catch (error) {
    return { error: 'Nie udało się pobrać produktów' }
  }
}