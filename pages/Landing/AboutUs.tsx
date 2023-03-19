const AboutUs = () => {
  return (
    <section className="w-5/6 max-w-[1200px] mx-auto md:flex">
      <div className="md:w-4/6">
        <h3 className="text-2xl py-8">
          Siltim to spółka o charakterze badawczo-rozwojowym.
        </h3>
        <p className="text-md">
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
        <button className="w-4/6 h-[45px] rounded-xl bg-blue-200 
          hover:bg-blue-400 text-af-white cursor-pointer"
        >
          Badania i rozwój
        </button>
        <p className="py-2">Zapoznaj się z naszymi osiągnięciami</p>
      </div>
    </section>
  )
}

export default AboutUs