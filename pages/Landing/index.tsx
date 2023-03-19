import Image from "next/image"

import Submenu from "./Submenu"
import { useMediaQuery } from "../../hooks/useMediaQuery"

import HeroImg from '../../public/assets/new_hero.jpg'

const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section className="gap-16 pt-24 md:h-full md:pb-0 relative">
        <div
          className="h-[500px] w-full absolute"
        >
          {/* HERO */}
          <div className="mx-auto w-5/6 max-w-[1200px] flex">
            <div className="w-1/2 flex flex-col justify-center">
              {/* TEXT */}
              <h2
                className="text-3xl font-bold"
              >
                Advanced materials for molecular design
              </h2>
              <p className="pt-8 text-rich-black">Pełny katalog produktów do pobrania:</p>
              <button
                className="w-[200px] h-[45px] bg-blue-200 hover:bg-blue-400 shadow-sm
                rounded-md mt-4 text-af-white duration-500"
              >
                Pobierz
              </button>
            </div>

            <div className="w-1/2 flex flex-col justify-center">
              <Image 
                src={HeroImg}
                alt="Hero-image" 
                width={580}
                height={400}
              />
            </div>
          </div>
          
          {/* POTRÓJNY BAR Z MENU */}
          <Submenu />

          {/* CALL TO ACTION R&D */}

          {/* THUMBY */}
        </div>
    </section>
  )
}

export default Landing