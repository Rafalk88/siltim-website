const Contact = () => {
  return (
    <section className="w-full bg-emerald">
      <div className="w-5/6 max-w-[1200px] mx-auto py-12 md:flex md:justify-around">
        <div className="md:flex md:flex-col md:justify-center">
          <h2 className="py-8 text-4xl">Skontaktuj się z nami</h2>
          <p className="text-af-white text-xl w-3/4">Witam! Z niecierpliwością czekamy na kontakt od Ciebie.</p>
        </div>

        <div className="md:flex md:flex-col w-1/2 gap-y-3">
          <input type="text" className="h-[45px] px-4" placeholder="Wpisz imię i nazwisko." />
          <input type="text" className="h-[45px] px-4" placeholder="Podaj adres email." />
          <textarea rows={6} className="p-4" placeholder="Wpisz wiadomość..." />
        </div>
      </div>
    </section>
  )
}

export default Contact