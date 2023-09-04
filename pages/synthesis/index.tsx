import Head from "next/head"
import Image from "next/image"

import Typography from "@/components/Typography"

import SynthImg from "@/public/assets/synthesis_img_1.png"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Syntezy
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] sm:min-h-[calc(100vh-80px)] mx-auto
        flex flex-col justify-center items-center pt-40"
      >
        <Typography
          className="flex justify-center"
          variant="h3"
          as="h3"
        >
          Syntezy na zlecenie
        </Typography>
        <Typography
          className="py-4"
          variant="h5"
          as="h5"
        >
          Zastosowania laboratoryjne
        </Typography>
        <Typography
          className="py-4"
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
          className="py-4"
          variant="h5"
          as="h5"
        >
          Zastosowania przemysłowe
        </Typography>
        <Typography
          className="py-4"
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
        <Typography
          className="font-bold pt-16"
          variant="body"
          as="p"
        >
          Posiadamy długoletnie doświadczenie oraz własne know-how w projektowaniu i
          preparatyce heterogenicznych katalizatorów, szczególnie w kierunku poniższych
          wymienionych zastosowań.
        </Typography>
        <ol className="py-4 pl-10 list-decimal">
          <Typography
            variant="body"
            as="li"
          >
            Tworzenie wiązań węgiel-węgiel (link do artykułów naukowych i artykułów na
            stronie): reakcja Sonogashiry.
          </Typography>
          <Typography
            variant="body"
            as="li"
          >
            Reakcje substytucji aromatycznej: Reakcja Buchwalda (przykłady substytucji z
            wykorzystaniem triazoli), aktywacja układów heterocyklicznych w substytucji
            halogenów - grupą azydkową.
          </Typography>
          <Typography
            variant="body"
            as="li"
          >
            Selektywne utlenianie związków pochodzenia naturalnego.
          </Typography>
          <Typography
            variant="body"
            as="li"
          >
            Kraking (rozkład) amoniaku do azotu i wodoru.
          </Typography>
        </ol>
        <div
          className="md:flex md:justify-between"
        >
          <div className="md:w-1/2">
            <Typography
              className="py-4"
              variant="body"
              as="p"
            >
              Katalizatory są aktywne w sub-stechiometrycznych ilościach (podać TON/TOF dla
              znanych układów) i otrzymujemy je z doskonałą powtarzalnością. W stałej ofercie
              dostępnych jest kilka wariantów a na zlecenie opracowujemy specyficzne układy
              katalityczne, dostępne w ilościach miligram - kilogram.
            </Typography>
            <Typography
              className="py-4"
              variant="body"
              as="p"
            >
              Możliwa jest produkcja układów o zróżnicowanej i dedykowanej morfologii,
              zawierających jeden metal lub kilka. Możemy także przygotować bibliotekę o
              ustalonej konfiguracji (rodzaje metali, ich dystrybucja - i pośrednio stężenie,
              rozmiar ziaren, rodzaj podłoża, rozkład dyspersji (monodyspersyjność).
            </Typography>
          </div>
          <div className="md:w1/2 flex justify-center items-center xl:pr-20">
            <Image
              src={SynthImg}
              width={400}
              height={400}
              alt="laboratory image"
            />
          </div>
        </div>
        <Typography
          className="py-4"
          variant="body"
          as="p"
        >
          Katalizatory zawierają metale ciężkie, nieszlachetne, szlachetne i ziem rzadkich.
          Ze względu na badawczo-rozwojowy charakter naszego laboratorium, możemy
          zapewnić charakterystykę materiałów jakie otrzymujemy. Przykładowo analizy
          SEM, TEM, FTIR i XRD.
        </Typography>
        <Typography
          className="pt-4 pb-12"
          variant="body"
          as="p"
        >
          Oferujemy organokatalizatory, związki koordynacyjne, będące połączeniem metali i
          ligandów organicznych. Związki te przygotowujemy w ścisłej współpracy z
          klientami z uwagi na specyficzne wymagania co do budowy i charakterystyki
          funkcjonalnej materiału.
        </Typography>
      </section>
    </>
    
  )
}

export default index