const Contact = () => {
  return (
    <section className="w-full bg-emerald">
      <div className="w-5/6 max-w-[1200px] mx-auto py-12 md:flex md:justify-around">
        <div className="md:flex md:flex-col md:justify-center">
          <h2 className="py-8 text-4xl">Skontaktuj się z nami</h2>
          <p className="text-af-white text-xl w-3/4">Witam! Z niecierpliwością czekamy na kontakt od Ciebie.</p>
        </div>

        <form 
          className="md:flex md:flex-col items-end w-1/2 gap-y-3"
        >
          <input
            id="name"
            className="w-full h-[45px] px-4"
            type="text"
            placeholder="Wpisz imię i nazwisko."
            required
            minLength={5}
            maxLength={30}
          />
          <input
            id="email"
            type="text"
            className="w-full h-[45px] px-4"
            placeholder="Podaj adres email."
            required
            minLength={6}
            maxLength={30}
            pattern=""
            title="Email musi"
          />
          <textarea
            id="message"
            rows={6}
            className="w-full p-4"
            placeholder="Wpisz wiadomość..."
            required
            maxLength={200}
          />
          <button
            type="submit"
            className="h-[45px] cursor-pointer"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact