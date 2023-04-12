import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | O nas
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] h-screen mx-auto py-8">
        <h3 className="text-3xl flex justify-center font-bold">Nasz misja</h3>
        <p className="py-6">
          Założona w 2021 roku firma Siltim jest start-upową firmą chemiczną
          napędzaną innowacjami naukowymi. Naszą misją jest rozwój nowych
          technologii, ze szczególnym uwzględnieniem projektowania i produkcji
          zaawansowanych materiałów chemicznych. Zaczynając od podstawowych
          pomysłów opracujemy technologię produkcji chemikaliów na pożądaną
          skalę. Zapewniamy rozpoznanie laboratoriów, projektowanie metod
          syntezy, projektowanie procesów, schematy orurowania i 
          oprzyrządowania, modele 3D oraz dokumentację fazy wykonawczej.
          Zainteresowania naukowe: projektowanie leków, barwniki i materiały
          dla elektroniki organicznej, całkowita synteza chemiczna.
        </p>
      </section>
    </>
    
  )
}

export default index