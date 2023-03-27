import Head from "next/head"
import IframeResizer from "iframe-resizer-react"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Sklep
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] mx-auto">
        <div className="w-full">
          <IframeResizer 
            src="https://siltim-chem-catalogue.onrender.com"
            heightCalculationMethod="lowestElement"
            minHeight={1546}
            style={{
              width: '1px',
              minWidth: '100%',
            }}
          />
        </div>
      </section>
    </>
  )
}

export default index