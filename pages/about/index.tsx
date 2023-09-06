import Head from "next/head"
import Image from 'next/image'

import Typography from "@/components/Typography"

import PiotrBPhoto from '@/public/assets/PiotrB.jpg'
import JacekMPhoto from '@/public/assets/JacekM.png'

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | O nas
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] mx-auto
        flex flex-col justify-center items-center pt-40"
      >
        <Typography 
          className="flex justify-center font-extrabold text-dark-grey"
          variant="h2"
          as="h2"
        >
          Nasz misja
        </Typography>
        <Typography
          className="py-6 text-dark-grey"
          variant="body"
          as="p"
        >
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
        </Typography>
        <Typography
          className="py-8 font-normal text-dark-grey"
          variant="h4"
          as="h4"
        >
          Zapraszamy do indywidualnych rozmów i spotkań:
        </Typography>
        <Typography
          className="flex flex-col sm:flex-row items-center sm:justify-between w-full sm:w-2/3 sm:px-10 text-dark-grey"
          variant="h5"
          as="ul"
        >
          <div className="pb-10 sm:pb-0 flex flex-col items-center">
            <Image
              className="rounded-full mb-4"
              src={PiotrBPhoto}
              alt="Piotr Bartczak photo"
              width={175}
              height={175}
            />
            <li>dr Piotr Bartczak</li>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full mb-4"
              src={JacekMPhoto}
              alt="Jacek Mularski photo"
              width={175}
              height={175}
            />
            <li>dr inz. Jacek Mularski</li>
          </div>
        </Typography>
        <Typography
        className="py-10 text-dark-grey"
        variant="body"
        as="p"
        >
          Nasz główny obszar działalności wiąże się z otrzymywaniem związków chemicznych
          oraz badaniem nowych metod syntezy chemicznej. Tworzenie nowych struktur może
          wymagać opracowania spersonalizowanego planu syntezy, a każdemu etapowi
          procesu należy poświęcić szczególną uwagę w celu zidentyfikowania korzystnych
          warunków poprzez eksperymenty. W tym celu korzystamy z naszej własnej bazy
          procedur preparatywnych, w której zgromadziliśmy wiedzę zdobytą w codziennej
          praktyce laboratoryjnej.
        </Typography>
        <Typography
        className="py-10 text-dark-grey"
        variant="body"
        as="p"
        >
          Podejmujemy zlecenia na badania nad syntezą związków chemicznych w kontekście
          projektów związanych z odkrywaniem aktywnych struktur leków, mechanizmów
          komórkowych oraz organicznych związków dedykowanych zastosowaniom
          półprzewodnikowym.
          Syntezy kontraktowe (na zlecenie) Skupiamy się na szczegółach związanych z
          przyjmowaniem i realizacją syntez kontraktowych, przykładając dużą wagę do
          bezpośredniego kontaktu, merytorycznej rozmowy oraz fachowego doradztwa.
        </Typography>
      </section>
    </>
    
  )
}

export default index