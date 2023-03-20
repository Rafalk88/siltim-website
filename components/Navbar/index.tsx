import { useState } from "react"
import Image from 'next/image'
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"

import { useMediaQuery } from "../../hooks/useMediaQuery"
import Logo from '../../public/assets/Logo.png'

export const menu = [
  {text: 'Główna', route: ''},
  {text: 'O nas', route: 'about'},
  {text: 'Syntezy na zlecenie', route: 'synthesis'},
  {text: 'Katalizatory', route: 'catalysts'},
  {text: 'Sklep', route: 'shop'},
];

const flexBetween = "flex items-center justify-between";

type Props = {
  isTopOfPage: Boolean
}

export const index = ({
  isTopOfPage,
}: Props) => {
  const [isMenuToogled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-gray drop-shadow"

  return (
    <nav className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full
    py-3`}
    >
      <div className={`${flexBetween} mx-auto w-5/6 max-w-[1200px]`}>
        <div className={`${flexBetween}`}>
          <figure className="p-2 h-16 w-16">
            <Link href="/" className="cursor-pointer">
              <Image src={Logo} alt={"Logo"} />
            </Link>
          </figure>
        </div>

        {
          isAboveMediumScreens ? (
            <div>
              <ul className={`${flexBetween} gap-8 text-sm text-rich-black`}>
                {
                  menu.map(item => {
                    return (
                      <Link key={item.text} href={`/${item.route}`} className="cursor-pointer">
                        {item.text}
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
          ) : (
            <div>
              <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToogled)}
                >
                  <RxHamburgerMenu className="h-6 w-6" />
                </button>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default index