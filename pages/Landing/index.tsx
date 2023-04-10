import Image from "next/image"
import { Button } from "@chakra-ui/react"

import Submenu from "./Submenu"
import Item from "./Item"
import AboutUs from "./AboutUs"
import Contact from "./Contact"
import ChemSlider from "./Slider"

import { useMediaQuery } from "../../hooks/useMediaQuery"

import { FolderArrowDownIcon } from "@heroicons/react/24/solid"
import HeroImg from '../../public/assets/hero.png'

const subMenuItems = [
  {title: "Na Zamówienie", icon: "synthesis"},
  {title: "Katalizatory", icon: "catalysts"},
  {title: "Sklep", icon: "shop"}
]

const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section className="gap-16 md:pb-0 relative">
        <div
          className="w-full"
        >
          {/* HERO */}
          <section className="mx-auto w-5/6 max-w-[1200px] pt-16 md:flex md:gap-8">
            <figure className="absolute top-0 left-0 md:w-1/2 flex flex-col justify-center z-[-1]">
              <Image
                src={HeroImg}
                alt="Hero-image"
              />
            </figure>

            <article className="md:w-1/2 flex flex-col justify-center">
              {/* TEXT */}
              <h2
                className="w-1/2 text-3xl text-af-white font-poppins font-bold pt-8 md:pt-0"
              >
                Advanced materials for molecular design
              </h2>
              <p className="pt-12 text-af-white font-bold">Pełny katalog produktów do pobrania:</p>
              <Button
                className="w-[200px] h-[45px] mb-2 shadow-sm
                mt-4 duration-500 font-rajdhani font-bold"
                data-role="download"
                variant="outline"
                colorScheme="whiteAlpha"
                leftIcon={<FolderArrowDownIcon width={20} height={20} />}
              >
                Pobierz
              </Button>
            </article>
          </section>
          
          {/* POTRÓJNY BAR Z MENU */}
          <Submenu>
            {
              subMenuItems.map((item) => {
                return (
                  <Item key={item.title} title={item.title} icon={item.icon} />
                )
              })
            }
          </Submenu>

          {/* CALL TO ACTION R&D */}
          <AboutUs />

          {/* IMAGE SLIDER */}
          <ChemSlider 
            className="mx-auto w-5/6 max-w-[1200px] py-10"
          />

          {/* CONTACT */}
          <Contact />

        </div>
    </section>
  )
}

export default Landing