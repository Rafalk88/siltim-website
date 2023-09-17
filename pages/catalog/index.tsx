import Head from "next/head"

import CatalogList from "@/components/CatologList"

const Catalog = () => {

  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Sklep
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] mx-auto">
        <div className="w-full min-h-[calc(100vh-120px)] pt-40">
          <CatalogList />
        </div>
      </section>
    </>
  )
}

export default Catalog