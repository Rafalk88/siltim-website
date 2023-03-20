import Link from "next/link"
import SocialMediaIcons from "@/components/SocialMediaIcons"
import { menu } from "../navbar"

const Footer = () => {
  return (
    <footer className="w-full bg-rich-black">
      <div className="w-5/6 max-w-[1200px] mx-auto text-af-white">
        <figure className="py-8">
          <img src="" alt="logo" />
        </figure>

        <section className="md:flex gap-4">
          <article>
            <p>Kontakt i dane przedsiębiorstwa</p>
            <p>Siltim Sp. z o.o.</p>
            <p>Św. Jana 11/4</p>
            <p>40-012 Katowice, Polska</p>
            <p>Rejestr przedsiębiorców KRS: 0000934584</p>
            <p>VAT EU: PL 6343003739</p>
          </article>

          <section className="flex flex-col py-6 md:py-0">
            {
              menu.map(item => {
                return (
                  <Link
                    key={item.text}
                    href={`/${item.route}`}
                    className="list-none cursor-pointer"
                  >
                    {item.text}
                  </Link>
                )
              })
            }
          </section>

          <SocialMediaIcons className="flex gap-4" />
        </section>

        <section className="gap-2 py-6 flex justify-center">
          <Link href="" className="cursor-pointer">Polityka prywatności</Link>
          <p>|</p>
          <Link href="" className="cursor-pointer">RODO</Link>
        </section>

        <section className="flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Siltim. Wszelkie prawa zastrzeżone.</p>
          <div className="gap-2 py-4 center flex flex-col items-center md:flex-row">
            <p>Strona stworzona przez</p>
            <Link href="https://www.linkedin.com/in/rafalkochanecki/" className="cursor-pointer">Rafała Kochaneckiego</Link>
          </div> 
        </section>
      </div>
      
    </footer>
  )
}

export default Footer