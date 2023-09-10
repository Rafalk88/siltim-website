import Head from "next/head"
import Image from "next/image"

import Typography from "@/components/Typography"

import SynthOneImg from "@/public/assets/synt1.png"
import SynthTwoImg from "@/public/assets/synt2.png"
import SynthThreeImg from "@/public/assets/synt3.png"
import SynthFourImg from "@/public/assets/synt4.png"
import SynthFiveImg from "@/public/assets/synt5.png"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Syntezy
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] sm:min-h-[calc(100vh-80px)] mx-auto
        flex flex-col pt-40"
      >
        <Typography
          className="flex justify-center font-extrabold py-6 text-dark-grey"
          variant="h2"
          as="h2"
        >
          Syntezy na zlecenie
        </Typography>
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="sm:w-1/2">
            <Typography
              className="py-4 text-dark-grey text-center"
              variant="h5"
              as="h5"
            >
              Zastosowania laboratoryjne
            </Typography>
            <Typography
              className="py-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Pobieramy honorarium tylko w przypadku zrealizowanych syntez
              związków chemicznych i ponosimy koszty opracowania metod z tym
              związanych. Ponieważ otrzymywanie nieopisanych dotąd związków
              może stwarzać konieczność prowadzenia długotrwałych prac
              badawczych, proponujemy w takich przypadkach porozumienie
              polegające na deklaracji klienta o intencji zakupu w umówionym
              przedziale czasowym. W trakcie tego okresu pozostajemy w
              kontakcie i informujemy o postępach prac, szacując przy tym
              datę dostawy.
            </Typography>

            <Typography
              className="py-4 text-dark-grey text-center"
              variant="h5"
              as="h5"
            >
              Zastosowania przemysłowe
            </Typography>
            <Typography
              className="py-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Zapraszamy do współpracy w zakresie przygotowania i testowania
              syntez pilotażowych z wykorzystaniem aparatury ze stali
              nierdzewnej o nominalnej objętości reaktora 50 L. Podejmujemy
              się zadań w zakresie przygotowania oryginalnej procesowej
              dokumentacji P&ID. Dysponujemy własnymi rozwiązaniami w
              zakresie aparatury na cele budowy prototypów i demonstratorów. 
            </Typography>
          </div>
          <div className="flex flex-col items-center sm:w-1/2 pt-5 sm:pb-0">
            <Image
              className="rounded-xl mb-10"
              src={SynthOneImg}
              width={300}
              height={300}
              alt="laboratory image"
            />
            <Image
              className="rounded-xl"
              src={SynthTwoImg}
              width={300}
              height={300}
              alt="laboratory image"
            />
          </div>
        </div>
        <Typography
          className="font-bold pt-16 text-dark-grey"
          variant="body"
          as="p"
        >
          Posiadamy długoletnie doświadczenie oraz własne know-how w projektowaniu i
          preparatyce heterogenicznych katalizatorów, szczególnie w kierunku poniższych
          wymienionych zastosowań.
        </Typography>
        <ol className="py-4 pl-10 list-decimal">
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            Tworzenie wiązań węgiel-węgiel (link do artykułów naukowych i artykułów na
            stronie): reakcja Sonogashiry.
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            Reakcje substytucji aromatycznej: Reakcja Buchwalda (przykłady substytucji z
            wykorzystaniem triazoli), aktywacja układów heterocyklicznych w substytucji
            halogenów - grupą azydkową.
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            Selektywne utlenianie związków pochodzenia naturalnego.
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            Kraking (rozkład) amoniaku do azotu i wodoru.
          </Typography>
        </ol>
        <div className="flex flex-col sm:flex-row pt-16">
          <div className="flex flex-col justify-center items-center sm:w-1/2 pb-5 sm:pb-0">
            <Image
              className="rounded-xl mb-10"
              src={SynthThreeImg}
              width={300}
              height={300}
              alt="laboratory image"
            />
            <Image
              className="rounded-xl mb-10"
              src={SynthFourImg}
              width={300}
              height={300}
              alt="laboratory image"
            />
            <Image
              className="rounded-xl"
              src={SynthFiveImg}
              width={300}
              height={300}
              alt="laboratory image"
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <div
              className="md:flex md:justify-between"
            >
              <div className="md:w-1/2">
                <Typography
                  className="pb-4 text-dark-grey"
                  variant="body"
                  as="p"
                >
                  Katalizatory są aktywne w sub-stechiometrycznych ilościach (podać TON/TOF dla
                  znanych układów) i otrzymujemy je z doskonałą powtarzalnością. W stałej ofercie
                  dostępnych jest kilka wariantów a na zlecenie opracowujemy specyficzne układy
                  katalityczne, dostępne w ilościach miligram - kilogram.
                </Typography>
                <Typography
                  className="py-4 text-dark-grey"
                  variant="body"
                  as="p"
                >
                  Możliwa jest produkcja układów o zróżnicowanej i dedykowanej morfologii,
                  zawierających jeden metal lub kilka. Możemy także przygotować bibliotekę o
                  ustalonej konfiguracji (rodzaje metali, ich dystrybucja - i pośrednio stężenie,
                  rozmiar ziaren, rodzaj podłoża, rozkład dyspersji (monodyspersyjność).
                </Typography>
              </div>
            </div>
            <Typography
              className="py-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Katalizatory zawierają metale ciężkie, nieszlachetne, szlachetne i ziem rzadkich.
              Ze względu na badawczo-rozwojowy charakter naszego laboratorium, możemy
              zapewnić charakterystykę materiałów jakie otrzymujemy. Przykładowo analizy
              SEM, TEM, FTIR i XRD.
            </Typography>
            <Typography
              className="pt-4 pb-12 text-dark-grey"
              variant="body"
              as="p"
            >
              Oferujemy organokatalizatory, związki koordynacyjne, będące połączeniem metali i
              ligandów organicznych. Związki te przygotowujemy w ścisłej współpracy z
              klientami z uwagi na specyficzne wymagania co do budowy i charakterystyki
              funkcjonalnej materiału.
            </Typography>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default index