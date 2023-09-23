import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Typography from "@/components/Typography"

import SynthOneImg from "@/public/assets/synt1.png"
import SynthTwoImg from "@/public/assets/synt2.png"
import SynthThreeImg from "@/public/assets/synt3.png"
import SynthFourImg from "@/public/assets/synt4.png"
import SynthFiveImg from "@/public/assets/synt5.png"
import SynthSixImg from "@/public/assets/synt6.png"

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
          className="font-extrabold pb-10 text-dark-grey"
          variant="h2"
          as="h2"
        >
          Syntezy na zlecenie
        </Typography>
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="sm:w-1/2">
            <Typography
              className="py-4 text-dark-grey"
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
              className="py-4 text-dark-grey"
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
              className="rounded-xl mb-10"
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
          preparatyce heterogenicznych katalizatorów, szczególnie w kierunku poniżej
          wymienionych zastosowań:
        </Typography>
        <ul className="py-4 pl-10 list-lower">
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            tworzenie wiązań węgiel-węgiel {
              <Link
                className="underline italic hover:text-black"
                href="/achievements"
              >
                (zobacz tutaj)
              </Link>
            }: reakcja Sonogashiry,
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            reakcje substytucji aromatycznej: Reakcja Buchwalda (przykłady substytucji z
            wykorzystaniem triazoli), aktywacja układów heterocyklicznych w substytucji
            halogenów - grupą azydkową,
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            selektywne utlenianie związków pochodzenia naturalnego,
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            kraking (rozkład) amoniaku do azotu i wodoru.
          </Typography>
        </ul>
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
              className="rounded-xl mb-10"
              src={SynthFiveImg}
              width={300}
              height={300}
              alt="laboratory image"
            />
            <Image
              className="rounded-xl mb-10"
              src={SynthSixImg}
              width={300}
              height={300}
              alt="laboratory image"
            />
          </div>
          <div className="flex flex-col sm:w-1/2 justify-center">
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              W celu zaspokojenia indywidualnych zapotrzebowań naszych klientów na
              układy katalityczne, opracowujemy dedykowane materiały o określonej strukturze i
              składzie (w ilościach od miligramów do kilograma) oraz prowadzimy prace
              badawcze, weryfikujące użyteczność takich materiałów w konkretnych reakcjach
              chemicznych.
            </Typography>
            <Typography
              className="py-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Możliwa jest produkcja układów o zróżnicowanej morfologii, zawierających
              jeden lub kilka metali. Jesteśmy gotowi na przygotowanie bibliotek
              materiałowych o
              ustalonej z klientem konfiguracji (rodzaje metali, ich dystrybucja - i pośrednio
              stężenie, rozmiar ziaren, rodzaj podłoża, rozkład dyspersji) do badań
              skriningowych.
            </Typography>
            <Typography
              className="py-4 pb-10 text-dark-grey"
              variant="body"
              as="p"
            >
              Nasze materiały charakteryzujemy przy pomocy ustalonych z klientem metod
              analitycznych, takich jak: SEM, TEM, BET, FTIR, XPS i XRD.
              Rozwijanym obecnie kierunkiem w naszej firmie są heterogeniczne
              kompozytowe katalizatory (w tym nośnikowe), będące połączeniem metali z
              ligandami organicznymi. Układy takie przygotowujemy w ścisłej współpracy z
              klientami z uwagi na specyficzne wymagania co do budowy i charakterystyki
              funkcjonalnej materiału.
            </Typography>
            <Link
              className="underline text-dark-grey hover:text-black pb-10"
              href="/files/KatalizatorySILTIM.pdf"
              target="_blank"
              download
            >
                Pobierz ulotkę
            </Link>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default index