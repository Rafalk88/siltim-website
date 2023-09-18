import React, { useState, useCallback, useEffect } from "react"
import Head from "next/head"

import CatalogList from "@/components/CatologList"
import { getGroupOfProducts } from '@/lib/mongo/groupOfProducts'
import { getProducts } from '@/lib/mongo/products'

const Catalog = ({ groupOfProducts }: any) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
  const [product, setProduct] = useState(null)

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