import { useState } from "react"
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx"

import { useMediaQuery } from "../../hooks/useMediaQuery"
import Logo from '../../public/assets/Logo.png'

const menu = [
  {text: 'Główna'},
  {text: 'O nas'},
  {text: 'Syntezy na zlecenie'},
  {text: 'Katalizatory'},
  {text: 'Sklep'},
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
            <a className="cursor-pointer" href="./">
              <Image src={Logo} alt={"Logo"} />
            </a>
          </figure>
        </div>

        {
          isAboveMediumScreens ? (
            <div>
              <ul className={`${flexBetween} gap-8 text-sm text-rich-black`}>
                {
                  menu.map(item => {
                    return (
                      <li 
                        key={item.text}
                        className="cursor-pointer"
                      >
                        {item.text}
                      </li>
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