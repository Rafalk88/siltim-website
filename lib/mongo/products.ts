import clientPromise from './index'

let client
let db: any
let siltim: any

const init = async () => {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db('siltim')
    siltim = await db.collection('products')
  } catch (error) {
    throw new Error('Brak połączenia z bazą danych!')
  }
}

;(async () => {
  await init()
})

export const getProducts = async (group: string) => {
  try {
    if(!siltim) await init()
    console.log(`Zapytanie do bazy danych o produkt o ID: ${group}`);
    const result = await siltim.find({ group }).toArray()

    if (result) {
      console.log('Znaleziono produkt w bazie danych:', result);
      return { products: result.map((item: any) => ({ ...item, _id: item._id.toString() })) }
    } else {
      return { error: 'Brak produktów o podanym kluczu grupy!' }
    }
  } catch (error) {
    console.log('Błąd podczas pobierania danych', error);
    return { error: 'Nie udało się pobrać produktów!' }
  }
}