import Link from "next/link"
import Image from "next/image"
import SocialMediaIcons from "@/components/SocialMediaIcons"
import { menu } from "../Navbar"

const Footer = () => {
  return (
    <footer className="w-full bg-blue">
      <div className="w-5/6 max-w-[1200px] mx-auto md:flex pt-12 text-white">
        <div className="w-full text-lg">
          <div className="sm:flex sm:justify-between">
            <article>
              <p>Siltim Sp. z o.o.</p>
              <p>Św. Jana 11/4</p>
              <p>40-012 Katowice, Polska</p>
              <p>KRS: 0000934584</p>
              <p>VAT EU: PL 6343003739</p>
            </article>

            <div className="sm:flex sm:justify-between w-2/3">
              <article className="flex flex-col py-6 md:py-0">
                {
                  menu.map(item => {
                    return (
                      <Link
                        key={item.text}
                        href={`/${item.route}`}
                        className="list-none cursor-pointer hover:text-light-grey"
                      >
                        {item.text}
                      </Link>
                    )
                  })
                }
              </article>

              <SocialMediaIcons className="flex gap-4 hover:text-light-grey" width={48} height={48} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center py-6">
            <div className="flex gap-2">
              <Link href="" className="cursor-pointer hover:text-light-grey">Polityka prywatności</Link>
              <p>|</p>
              <Link href="" className="cursor-pointer hover:text-light-grey">RODO</Link>
            </div>
            <p className="text-center">&copy; {new Date().getFullYear()} Siltim. Wszelkie prawa zastrzeżone</p>
            <div className="gap-2 center flex items-center">
              <p>Webmaster</p>
              <Link
                href="https://www.linkedin.com/in/rafalkochanecki/"
                className="cursor-pointer hover:text-light-grey"
                target="_blank"
                rel="noreferrer"
              >
                Rafał Kochanecki
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer