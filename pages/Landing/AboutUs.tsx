import { Button } from "@chakra-ui/react"
import { BookOpenIcon } from "@heroicons/react/24/solid"

const AboutUs = () => {
  return (
    <section className="w-5/6 max-w-[1200px] mx-auto md:flex">
      <div className="md:w-4/6">
        <h3 className="text-xl py-8 font-poppins font-bold">
          Siltim to spółka o charakterze badawczo-rozwojowym.
        </h3>
        <p className="text-md font-raleway">
          Równolegle do działalności komercyjnej, pracujemy nad nowymi
          technologiami. Zapraszamy do współpracy w zakresie współpracy
          gospodarczej inne podmioty oraz inwestorów. Nasz zespół łączy
          interdyscyplinarne kompetencje z zakresu chemii oraz inzynierii.
          Mamy doświadczenie w przygotowywaniu wniosków konkursowych.
        </p>
      </div>
      
      <div className="py-8 md:py-0 md:w-2/6 md:flex md:flex-col md:justify-center
        md:items-center"
      >
        <Button 
        className="w-[250px] h-[45px]
          cursor-pointer font-rajdhani font-bold"
        data-role="information"
        leftIcon={<BookOpenIcon width={20} height={20}/>}
        >
          Badania i rozwój
        </Button>
        <p className="py-2">Zapoznaj się z naszymi osiągnięciami</p>
      </div>
    </section>
  )
}

export default AboutUs