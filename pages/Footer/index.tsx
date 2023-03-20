import SocialMediaIcons from "@/components/SocialMediaIcons"
import { menu } from "../../components/Navbar"

const Footer = () => {
  return (
    <footer className="w-full bg-rich-black">
      <div className="w-5/6 max-w-[1200px] mx-auto text-af-white">
        <figure className="py-8">
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

          <SocialMediaIcons className="flex gap-4" />
        </section>

        <section className="gap-2 py-6 flex justify-center">
          <a href="" className="cursor-pointer">Polityka prywatności</a>
          <p>|</p>
          <a href="" className="cursor-pointer">RODO</a>
        </section>

        <section className="pb-6 flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Siltim. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-2 py-2">
            <p>Strona stworzona przez</p>
            <a href="" className="cursor-pointer">Rafała Kochaneckiego</a>
          </div> 
        </section>
      </div>
      
    </footer>
  )
}

export default Footer