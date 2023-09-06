import Head from "next/head"
import Image from "next/image"

import Typography from "@/components/Typography"

import cataOnePhoto from "@/public/assets/cata1.png"
import cataTwoPhoto from "@/public/assets/cata2.png"
import cataThreePhoto from "@/public/assets/cata3.png"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Katalizatory
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] md:min-h-[calc(100vh-80px)] mx-auto
        flex flex-col justify-center items-center pt-40 pb-12"
      >
        <div>
          <Typography
            className="flex justify-center"
            variant="h3"
            as="h3"
          >
            Katalizatory
          </Typography>
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="sm:w-1/2">
              <Typography
                className="pt-6"
                variant="body"
                as="p"
              >
                Oferujemy heterogeniczne katalizatory, użyteczne w syntezie organicznej
                przy tworzeniu wiązań węgiel-węgiel. Katalizatory są aktywne w
                sub-stechiometrycznych ilościach (podać TON/TOF   dla znanych układów)
                i otrzymujemy je z doskonałą powtarzalnością. W stałej ofercie dostępnych
                jest kilka wariantów. Na zlecenie produkowane są inne układy katalityczne,
                dostępne w ilościach   miligram - kilogram. Możliwa jest produkcja układów
                o zróżnicowanej i dedykowanej morfologii,  zawierających jeden metal lub
                kilka. Możemy także przygotować bibliotekę o   ustalonej
                konfiguracji - rodzaje metali, ich dystrybucja - i pośrednio  stężenie,
                rozmiar ziaren, rodzaj podłoża, rozkład dyspersji -  monodyspersyjność.
                Katalizatory zawierają metale ciężkie, nieszlachetne, szlachetne i ziem
                rzadkich. Ze względu na badawczo-rozwojowy charakter naszego laboratorium,
                możemy   zapewnić charakterystykę materiałów jakie otrzymujemy.
                Przykładowo analizy  SEM, TEM, FTIR i XRD.
              </Typography>
              <Typography
                variant="body"
                as="p"
              >
                Oferujemy organokatalizatory, związki koordynacyjne, będące połączeniem
                metali i ligandów organicznych. Związki te przygotowujemy w ścisłej
                współpracy z klientami z uwagi na specyficzne wymagania co do budowy i
                charakterystyki funkcjonalnej materiału.
              </Typography>
            </div>
            <div>
              <Image
                className="mb-10"
                src={cataOnePhoto}
                alt="section photo"
                width={300}
                height={300}
              />
              <Image
                className="mb-10"
                src={cataTwoPhoto}
                alt="section photo"
                width={300}
                height={300}
              />
              <Image
                src={cataThreePhoto}
                alt="section photo"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div>
          <Typography
            className="py-6 flex justify-center"
            variant="h3"
            as="h3"
          >
            Technologie wodorowe
          </Typography>
          <Typography
            variant="body"
            as="p"
          >
            Bezpieczna i efektywna technologia umożliwiająca wykorzystanie wodoru jako
            paliwa stanowi złożone wyzwanie technologiczne. Jedną z możliwości jest
            wykorzystanie amoniaku jako nośnika (magazynu) wodoru. Głównym powodem dla
            którego ta idea budzi zainteresowanie na skalę globalną, jest możliwość transportu
            ciekłego amoniaku. Pod względem stechiometrycznym udział atomów wodoru jest
            znacznie większy niż w przypadku innych nośników. Skroplony gaz zapewnia także
            dużą, nieosiągalną dla innych rozwiązań, masę wodoru w jednostce objętości.
            Obecnie prowadzimy III - fazę testów katalizatora, wykazującego następujące
            właściwości:
          </Typography>
          <Typography
            className="py-6"
            variant="body"
            as="ul"
          >
            <li>
              - dodatni bilans energetyczny ze względu na jego aktywność w temperaturach
              poniżej 450 *C (jaki ten bilans w liczbach)
            </li>
            <li>
              - ponad 99,9% efektywność działania w trakcie wielodniowych testów
              laboratoryjnych.
            </li>
            <li>
              - niski koszt wytworzenia oraz skalowalna technologia produkcji.
            </li>
          </Typography>
          <Typography
            className="py-6"
            variant="body"
            as="p"
          >
            Poszukujemy podmiotów zainteresowanych współpracą ukierunkowaną na
            wdrożenie rynkowe katalizatora oraz badaniami nad dalszą poprawą efektywności
            procesu rozkładu amoniaku (obniżaniem temperatury procesu - poprawą bilansu
            energetycznego). Mile widziane projekty z branży automotive.
          </Typography>
        </div>
        
      </section>
    </>
    
  )
}

export default index