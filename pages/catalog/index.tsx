import React, { useState } from "react"
import Head from "next/head"
import axios from "axios"

import CatalogList from "@/components/CatologList"
import { getGroupOfProducts, getProducts } from '@/lib/mongo/groupOfProducts'

const Catalog = ({ groupOfProducts, products }: any) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Katalog
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] mx-auto">
        <div className="w-full min-h-[calc(100vh-120px)] pt-40">
          <CatalogList
            groupOfProducts={groupOfProducts}
            product={products}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
        </div>
      </section>
    </>
  )
}

export default Catalog

export async function getStaticProps() {
  try {
    const { groupOfProducts } = await getGroupOfProducts()
    const { products } = await getProducts()
    if (!groupOfProducts || !products) {
      throw new Error('Failed to fetch groupOfProducts! or products!')
    }

    return {
      props: {
        groupOfProducts,
        products,
      },
    }
  } catch (error: any) {
    new Error('Failed to fetch data!', error)

    return {
      props: {
        groupOfProducts: null,
        product: null,
      },
    }
  }
}