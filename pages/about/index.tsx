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
        flex flex-col sm:flex-row pt-40"
      >
        <div className="sm:w-1/2">
          <Typography 
            className="flex justify-center font-extrabold text-dark-grey pb-10"
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
          className="pb-6 text-dark-grey"
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
          className="pb-10 text-dark-grey"
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
        </div>
        <div className="sm:w-1/2 flex flex-col items-center order-first sm:order-last pb-14 sm:pb-0">
          <Typography
            className="w-3/4 mb-8 font-normal text-dark-grey text-center"
            variant="h4"
            as="h4"
          >
            Zapraszamy do indywidualnych rozmów i spotkań:
          </Typography>
          <Typography
            className="flex flex-col items-center sm:justify-between w-full sm:w-2/3 sm:px-5 text-dark-grey"
            variant="h6"
            as="ul"
          >
            <div className="flex flex-col items-center mb-10">
              <Image
                className="rounded-full mb-4"
                src={JacekMPhoto}
                alt="Jacek Mularski photo"
                width={175}
                height={175}
              />
              <li className="text-center pb-2">dr inż. Jacek Mularski</li>
              <li className="font-normal pb-2 text-center">Dyrektor generalny</li>
              <li className="font-normal">tel.: 666 666 666</li>
            </div>
            <div className="pb-10 sm:pb-0 flex flex-col items-center">
              <Image
                className="rounded-full mb-4"
                src={PiotrBPhoto}
                alt="Piotr Bartczak photo"
                width={175}
                height={175}
              />
              <li className="text-center pb-2">dr Piotr Bartczak</li>
              <li className="font-normal pb-2 text-center">Dyrektor ds. technologii</li>
              <li className="font-normal">tel.: 888 888 888</li>
            </div>
          </Typography>
        </div>
      </section>
    </>
    
  )
}

export default index