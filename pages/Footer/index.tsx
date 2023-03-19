import { menu } from "../Navbar"

const Footer = () => {
  return (
    <footer className="w-full bg-rich-black">
      <div className="w-5/6 max-w-[1200px] mx-auto text-af-white">
        <figure>
          <img src="" alt="logo" />
        </figure>

        <section className="flex gap-4">
          <article>
            <p>Kontakt i dane przedsiębiorstwa</p>
            <p>Siltim Sp. z o.o.</p>
            <p>Św. Jana 11/4</p>
            <p>40-012 Katowice, Polska</p>
            <p>Rejestr przedsiębiorców KRS: 0000934584</p>
            <p>VAT EU: PL 6343003739</p>
          </article>

          <section>
            {
              menu.map(item => {
                return (
                  <li 
                    key={item.text}
                    className="list-none cursor-pointer"
                  >
                    {item.text}
                  </li>
                )
              })
            }
          </section>

          <section></section>
        </section>

        <section></section>

        <section className="flex gap-2">
          <a href="" className="cursor-pointer">Polityka prywatności</a>
          <p>|</p>
          <a href="" className="cursor-pointer">RODO</a>
        </section>

        <section>
          <p>&copy; {new Date().getFullYear()} Siltim. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-2">
            <p>Strona stworzona przez</p>
            <a href="" className="cursor-pointer">Rafała Kochaneckiego</a>
          </div> 
        </section>
      </div>
      
    </footer>
  )
}

export default Footer