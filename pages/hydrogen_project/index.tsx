import React from 'react'
import Head from "next/head"
import Link from "next/link"
import { Button } from "@chakra-ui/react"

import Typography from "@/components/Typography"

const discardLink = "/"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Projekt wodorowy
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] md:min-h-[calc(100vh-80px)] mx-auto pt-40 pb-12">
        <Typography
          className="font-extrabold text-dark-grey"
          variant="h2"
          as="h2"
        >
          Projekt wodorowy
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Katalizator rozkładu amoniaku oraz prototyp reaktora wodorowego
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Odkryjmy przyszłość zrównoważonego transportu - technologia wodorowa w Polsce
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Czy wiesz, że Polska ma szansę stać się liderem w dziedzinie technologii wodorowych?
          Nasz projekt dotyczący innowacyjnego katalizatora ma potencjał, aby odmienić przyszłość
          całej branży samochodowej. Potrzebujemy Twojego wsparcia, aby przyspieszyć prace nad
          tą przełomową technologią i uczynić Polskę centrum rozwoju technologii wodorowych.
        </Typography>
        <div className="py-6 flex items-center justify-center">
          <Typography
            className="py-4 text-dark-grey"
            variant="h5"
            as="h5"
          >
            Zapraszamy do wsparcia naszej zrzutki na projekt wodorowy
          </Typography>
          <Link href={discardLink} passHref>
            <Button
              className="w-[185px] h-[52px] ml-4"
              variant="secondary"
            >
              Link do zrzutki
            </Button>
          </Link>
        </div>
        <Typography
          className="py-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Dlaczego nasz projekt jest tak wyjątkowy?
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Nasza inicjatywa opiera się na efektywnej i nowatorskiej technologii, która umożliwia
          wykorzystanie generowanego wodoru jako paliwa. Jest to złożone wyzwanie technologiczne,
          ale mamy plan, dzięki któremu możemy je zrealizować. Jednym z kluczowych elementów
          naszego projektu jest wykorzystanie amoniaku jako źródła wodoru.
        </Typography>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Dlaczego amoniak jest tak interesujący?
        </Typography>
        <ul className="list-disc py-4 pl-10">
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Gęstość energii
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Amoniak w postaci ciekłej może magazynować znacznie więcej energii w jednostce
              objętości niż sprężony wodór, co sprawia, że jest bardziej efektywnym magazynem
              energii,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Transport i przechowywanie
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Skroplony amoniak jest znacznie łatwiejszy w transporcie i przechowywaniu w
              porównaniu do wodoru, który wymaga skrajnie niskich temperatur lub wysokich
              ciśnień,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Bezpieczeństwo
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Amoniak jest zdecydowanie bezpieczniejszy w użytkowaniu niż bezwonny wodór,
              który posiada szersze zakresy wybuchowości,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Infrastruktura
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Istniejące kanały dystrybucji amoniaku mogą być wykorzystane do transportu tego
              nośnika energii, bez konieczności budowy nowej infrastruktury. Ponadto, amoniak
              jest produkowany w dużych ilościach przez polskie zakłady przemysłowe, co
              dodatkowo powinno wpłynąć korzystnie na rozwój tej gałęzi gospodarki i aktywizować
              lokalny rynek pracy.
            </Typography>
          </Typography>
        </ul>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Przykłady zastosowań technologii wodorowej
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Technologia wodorowa znajduje szerokie zastosowanie nie tylko w sektorze
          motoryzacyjnym, ale również w innych dziedzinach przemysłu. Obecnie z wodoru, jako
          paliwa, korzystają zarówno samochody wyposażone w silniki wewnętrznego spalania, jak i
          pojazdy wyposażone w ogniwa paliwowe (FCV - ang. Fuel Cell Vehicles). Przekłada się to
          na ich wyjątkową efektywność i przyjazność dla środowiska. W przeciwieństwie do
          tradycyjnych pojazdów spalinowych, FCV emitują jedynie czystą wodę jako produkt uboczny.
          Ponadto, technologia wodorowa może być stosowana w sektorach transportu publicznego,
          jak autobusy wodorowe, czy w przemyśle lotniczym. Jest to obiecująca alternatywa dla
          samolotów na tradycyjne paliwo lotnicze, co może znacząco obniżyć emisję CO<sub>2</sub> w ruchu
          powietrznym.
        </Typography>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Rola katalizatorów w wykorzystaniu wodoru
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Katalizatory jakie opracowaliśmy odgrywają kluczową rolę w procesie konwersji amoniaku na
          wodór. Nasz projekt skupia się na opracowaniu i wykorzystaniu efektywnego katalizatora,
          który pozwala na szybkie i ekonomiczne uzyskiwanie wodoru z amoniaku. To właśnie nasza
          technologia otwiera drzwi do wykorzystania wodoru jako czystego źródła energii, a
          efektywność katalizatora jest kluczowym aspektem sukcesu tej koncepcji.
        </Typography>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Innowacyjność i znaczenie projektu dla przyszłości
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Nasz projekt w dziedzinie technologii wodorowych jest jest innowacyjny a zarazem
          futurystyczny. Dlatego, że podąża nieuchronną ścieżką jaką zmierza motoryzacja. Pod
          kątem technologii jak i troski o lokalny i globalny klimat. Przejście na samochody wodorowe
          lub stosowanie wodoru jako źródła energii może znacząco zmniejszyć emisję CO<sub>2</sub> , co jest
          krokiem w kierunku ochrony naszego środowiska. Nasza technologia otwiera nowe
          perspektywy zarówno w zakresie pojazdów osobowych, jak i komunikacji publicznej, a jej
          potencjał jest ogromny.
        </Typography>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Nasze dotychczasowe osiągnięcia - badania naukowe i wyniki eksperymentalne
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Nasza praca badawcza jest oparta na solidnych podstawach naukowych, potwierdzonych
          rzetelnymi testami laboratoryjnymi.
          Aktualnie znajdujemy się w fazie testów kolejnej generacji katalizatora, który jest kluczowym
          elementem naszej technologii. Dotychczasowe wyniki są zachwycające:
        </Typography>
        <ul className="list-disc py-4 pl-10">
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Dodatni bilans energetyczny
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Nasz katalizator jest aktywny w temperaturach poniżej 450<sup>0</sup>C, co oznacza pozytywny
              bilans energetyczny w procesie rozkładu amoniaku,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Wysoka efektywność
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Osiągnięty stopień konwersji amoniaku do wodoru, osiągnięty dzięki wykorzystaniu
              naszego katalizatora, przekroczył <span className="font-bold">99,9%</span>.
              W trakcie zmęczeniowego testu ciągłego, katalizator zachowuje swoją sprawność w
              granicach 0,5% odchylenia od wartości maksymalnej,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Niskie koszty produkcji
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Nasza technologia jest wydajna. Koszty produkcji katalizatora są niskie, a technologia
              jest skalowalna. Prognozujemy, że ze względu na niskie koszty wytwarzania, będzie
              stanowił silną konkurencję na rynku. Największym aktywem projektu jest know-how.
            </Typography>
          </Typography>
        </ul>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Nasze cele i plany na przyszłość
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Jeśli uzyskamy wsparcie, nasze cele obejmują:
        </Typography>
        <ul className="list-disc py-4 pl-10">
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Dalszy rozwój technologii
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Chcemy doskonalić nasz katalizator i dążyć do dalszej poprawy efektywności procesu
              rozkładu amoniaku. To oznacza bardziej ekologiczny i oszczędny sposób
              uzyskiwania wodoru,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Przygotowanie prototypu reaktora wodorowego do rozkładu amoniaku
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Planujemy zademonstrować działający model reaktora wodorowego, który będzie
              oparty na naszej technologii. To krok w kierunku praktycznego wykorzystania wodoru
              w transporcie,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Wdrożenie technologii w pojazdach
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Naszym długoterminowym celem jest rozwijanie technologii, która będzie mogła być
              bezpośrednio stosowana w pojazdach.
            </Typography>
          </Typography>
        </ul>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Jak możesz nam pomóc?
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Twoje wsparcie jest kluczowe dla naszego sukcesu. Możesz wesprzeć naszą inicjatywę w
          kilka sposób:
        </Typography>
        <ul className="list-disc py-4 pl-10">
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Wsparcie finansowe
            </Typography>
            <Typography
              className="text-dark-grey"
              variant="body"
              as="p"
            >
              Każda złotówka przyspiesza naszą pracę i przybliża nas do wdrożenia tej technologii
              na rynek. Twoja pomoc jest niezwykle cenna,
            </Typography>
            <Link
              className="pt-2 pb-4 font-bold text-blue underline"
              href={discardLink}
            >
              Link do zrzutki
            </Link>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Polecanie naszego projektu
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Jeśli znasz podmioty z branży automotive, które mogłyby być zainteresowane
              współpracą lub inwestycją w nasz projekt, daj nam znać,
            </Typography>
          </Typography>
          <Typography
            className="text-dark-grey"
            variant="body"
            as="li"
          >
            <Typography
              className="pt-4 text-dark-grey font-bold"
              variant="body"
              as="p"
            >
              Udostępnianie informacji
            </Typography>
            <Typography
              className="pb-4 text-dark-grey"
              variant="body"
              as="p"
            >
              Im więcej osób dowie się o naszej inicjatywie, tym bliżej będziemy do realizacji naszej
              wizji.
            </Typography>
          </Typography>
        </ul>
        <Typography
          className="pt-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Otwartość na współpracę i rozwijanie technologii
        </Typography>
        <Typography
          className="py-4 text-dark-grey"
          variant="body"
          as="p"
        >
          Jesteśmy otwarci na współpracę z różnymi podmiotami, w tym przedsiębiorstwami z branży
          automotive oraz instytucjami badawczymi. Nasz projekt jest elastyczny i może ewoluować
          dzięki nowym pomysłom i technologicznym innowacjom. Szukamy partnerów, którzy widzą
          potencjał naszej technologii i chcą razem z nami kształtować przyszłość ekologicznej
          mobilności.
          Razem możemy wpłynąć na przyszłość transportu w Polsce i na świecie.
          Dołącz do nas i pomóż uczynić Polskę liderem w dziedzinie technologii wodorowych!
        </Typography>
        <Typography
          className=" pt-6 font-extrabold text-dark-grey"
          variant="h2"
          as="h2"
        >
          Dziękujemy za każdy gest wsparcia!
        </Typography>
        <Typography
          className="pt-2 pb-4 text-dark-grey"
          variant="h5"
          as="h5"
        >
          Zespół SILTIM.
        </Typography>
      </section>
    </>
  )
}

export default index