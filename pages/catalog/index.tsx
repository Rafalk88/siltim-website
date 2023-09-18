import React, { useState, useCallback, useEffect } from "react"
import Head from "next/head"

import CatalogList from "@/components/CatologList"
import { getGroupOfProducts } from '@/lib/mongo/groupOfProducts'

type Price = {
  currency: string
  value: number
}

type Prices = {
  quantity: string
  purity: string
  price: Price[]
}

type Product = {
  _id: string
  id: string
  group: string
  image: string
  name: string
  smiles: string
  molecularFormula: string
  cas?: string
  mw: number
  prices?: Prices[]
}

type ProductsState = {
  products: Product[]
}

const Catalog = ({ groupOfProducts }: any) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
  const [product, setProduct] = useState<ProductsState | null>(null)
  const [cacheProducts, setCacheProducts] = useState<ProductsState>({ products: []})

  const fetchData = useCallback(async () => {
    try {
      if (selectedGroup) {
        const response = await fetch(`/api/products?group=${selectedGroup}`);
        const result = await response.json();

        setProduct(result);
        return
      }

      setProduct(null)
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  }, [selectedGroup]);

  useEffect(() => {
    fetchData()
  }, [fetchData, selectedGroup])

  useEffect(() => {
    if (product && product.products) {
      setCacheProducts((prevState: ProductsState) => {
        return {
          products: [...prevState.products, ...product.products],
        };
      });
    }
  }, [product]);

  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Sklep
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] mx-auto">
        <div className="w-full min-h-[calc(100vh-120px)] pt-40">
          <CatalogList
            groupOfProducts={groupOfProducts}
            product={product}
            setProduct={setProduct}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
        </div>
      </section>
    </>
  )
}

export default Catalog

export async function getServerSideProps() {
  try {
    const { groupOfProducts } = await getGroupOfProducts()
    if (!groupOfProducts) {
      throw new Error('Failed to fetch groupOfProducts!')
    }

    return {
      props: {
        groupOfProducts,
      },
    }
  } catch (error: any) {
    new Error('Failed to fetch data!', error)

    return {
      props: {
        groupOfProducts: null,
      },
    }
  }
}