import Image from 'next/image'
import Link from "next/link"
import { useState } from "react"
import { Button } from "@chakra-ui/react"

import { useMediaQuery } from "../../hooks/useMediaQuery"

import Logo from '../../public/assets/Logo.png'
import { RxHamburgerMenu } from "react-icons/rx"
import { XMarkIcon } from "@heroicons/react/24/outline"

export const menu = [
  {text: 'Główna', route: '', lineWidth: 100},
  {text: 'O nas', route: 'about', lineWidth: 100},
  {text: 'Katalizatory', route: 'catalysts', lineWidth: 100},
  {text: 'Syntezy na zlecenie', route: 'synthesis', lineWidth: 195},
];
 
const flexBetween = "flex items-center justify-between";

type Props = {
  isTopOfPage: Boolean
}

export const index = ({
  isTopOfPage,
}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-gray drop-shadow bg-white"

  return (
    <nav className={`${navbarBackground} ${flexBetween} fixed top-[40px] z-30 w-full
    py-3`}
    >
      <div className={`flex items-center mx-auto w-5/6 max-w-[1200px]`}>
        <div className={`${flexBetween} w-1/6`}>
          <div className="p-2 h-16 w-16">
            <Link href="/" className="cursor-pointer">
              <Image src={Logo} alt={"Logo"} />
            </Link>
          </div>
        </div>

        {
          isAboveMediumScreens ? (
            <div className={`${flexBetween} w-5/6`}>
              <ul className={`${flexBetween} gap-8 text-sm`}>
                {
                  menu.map(item => {
                    return (
                      <div className={`flex flex-col before:content-[''] before:w-[${item.lineWidth}px]
                        before:h-[1px] before:bg-black before:hover:bg-blue hover:text-blue`}
                      >
                        <Link key={item.text} href={`/${item.route}`} className="cursor-pointer text-sm">
                          {item.text}
                        </Link>
                      </div>
                      
                    )
                  })
                }
              </ul>

              <Link href={"/shop"} passHref>
                <Button
                  className="w-[125px] h-[42px]"
                  as="a"
                  variant="primary"
                >
                  Sklep
                </Button>
              </Link>

              {/* SEARCH BTN HERE */}
            </div>
          ) : (
            <div>
              <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <RxHamburgerMenu className="h-6 w-6" />
                </button>
            </div>
          )
        }

        {
          !isAboveMediumScreens && isMenuToggled && (
            <section className=" fixed right-0 bottom-0 h-full bg-pink w-[300px] text-af-white">
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className="w-6 h-6 cursor-pointer" />
                </button>
              </div>

              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {
                  menu.map(item => {
                    return (
                      <Link key={item.text} href={`/${item.route}`} className="cursor-pointer">
                        {item.text}
                      </Link>
                    )
                  })
                }
              </div>
            </section>
          )
        }
      </div>
    </nav>
  )
}

export default index