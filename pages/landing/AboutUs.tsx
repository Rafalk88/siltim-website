import { Button } from "@chakra-ui/react"

import Typography from "@/components/Typography"
import ChemSlider from "./ChemSlider"

const AboutUs = () => {
  return (
    <section className="w-5/6 max-w-[1200px] mx-auto md:pt-12 pb-24 md:pb-0 md:flex
      md:justify-center md:items-center md:gap-x-40"
    >
      <div className="w-full pb-12 mx-auto md:mx-0 md:pb-0 sm:w-1/2 md:w-1/3">
        <ChemSlider />
      </div>
      <div className="md:w-1/3">
        <Typography
          className="font-extrabold text-dark-grey"
          variant="h1"
          as="h3"
        >
          Potencjał badawczy
        </Typography>
        <Typography
          className="py-8 text-dark-grey"
          variant="body"
          as="p"
        >
          Dzięki naszemu zaangażowaniu w projekty badawcze jakie inicjujemy, bądź w jakich
          partycypujemy, chcielibyśmy wykazać wkład <br /> w postęp naukowy w dziedzinie 
          chemii. Wierzymy, że odpowiedni stopień automatyzacji oraz cyfryzacji tych procesów, 
          otworzy nowe możliwości na drodze do nowych struktur <br /> i przyczyni się do 
          odkrycia nieznanych dotąd obszarów przestrzeni chemicznej. Z tego względu testujemy
          i doskonalimy oryginalne rozwiązania od początku działalności.
        </Typography>

        <Typography
          className="pb-8 text-dark-grey"
          variant="body"
          as="p"
        >
          Kluczowy personel badawczy w osobach dr Piotra Bartczaka oraz dr inż. Jacka Mularskiego
          obejmuje kierownictwo oraz stawia nowe wyzwania w zakresie prac projektowych, syntez
          chemicznych, strukturyzacji bazy danych <br /> i wdrożeniem chmury obliczeniowej opartej
          <br /> o metody uczenia maszynowego, i syntezy.
        </Typography>

        <Button
          className="w-full sm:w-[250px] h-[45px] cursor-pointer font-bold"
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