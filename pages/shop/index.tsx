import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Sklep
        </title>
      </Head>
      <section>
          <div className="w-full">
            <iframe src="https://siltim-chem-catalogue.onrender.com" width="100%" height="1500px" frameBorder="0"></iframe>
          </div>
      </section>
    </>
  )
}

export default index