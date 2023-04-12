import { Button } from "@chakra-ui/react"

import ChemSlider from "./Slider"

const paragraphStyles = "text-lg text-dark-grey"

const AboutUs = () => {
  return (
    <section className="w-5/6 md:h-screen max-w-[1200px] mx-auto pb-24 md:pb-0 md:flex
      md:justify-center md:items-center md:gap-x-40"
    >
      <div className="w-1/2 pb-12 mx-auto md:mx-0 md:pb-0 md:w-1/3">
        <ChemSlider 
          className=""
        />
      </div> 

      <div className="md:w-1/3">
        <h3 className="text-5xl font-extrabold text-dark-grey">
          Charakter badawczo-rozwojowy
        </h3>
        <p className={`${paragraphStyles} py-8`}>
          Dzięki naszemu zaangażowaniu w projekty badawcze jakie inicjujemy, bądź w jakich
          partycypujemy, chcielibyśmy wykazać wkład <br /> w postęp naukowy w dziedzinie 
          chemii. Wierzymy, że odpowiedni stopień automatyzacji oraz cyfryzacji tych procesów, 
          otworzy nowe możliwości na drodze do nowych struktur <br /> i przyczyni się do 
          odkrycia nieznanych dotąd obszarów przestrzeni chemicznej. Z tego względu testujemy
          i doskonalimy oryginalne rozwiązania od początku działalności.
        </p>

        <p className={`${paragraphStyles} pb-8`}>
          Kluczowy personel badawczy w osobach dr Piotra Bartczaka oraz dr inż. Jacka Mularskiego
          obejmuje kierownictwo oraz stawia nowe wyzwania w zakresie prac projektowych, syntez
          chemicznych, strukturyzacji bazy danych <br /> i wdrożeniem chmury obliczeniowej opartej
          <br /> o metody uczenia maszynowego, i syntezy.
        </p>

        <Button 
        className="w-[250px] h-[45px]
          cursor-pointer font-rajdhani font-bold"
        data-role="information"
        variant="primary"
        >
          Zobacz nasze osiągnęcia
        </Button>
      </div>
    </section>
  )
}

export default AboutUs