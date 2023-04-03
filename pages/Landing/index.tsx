import Image from "next/image"

import Submenu from "./Submenu"
import Item from "./Item"
import AboutUs from "./AboutUs"
import Contact from "./Contact"
import ChemSlider from "./Slider"

import { useMediaQuery } from "../../hooks/useMediaQuery"

import HeroImg from '../../public/assets/new_hero.jpg'

const subMenuItems = [
  {title: "Na Zamówienie", icon: "synthesis"},
  {title: "Katalizatory", icon: "catalysts"},
  {title: "Sklep", icon: "shop"}
]

const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section className="gap-16 md:pb-0">
        <div
          className="w-full"
        >
          {/* HERO */}
          <section className="mx-auto w-5/6 max-w-[1200px] md:flex md:gap-8">
            <figure className="md:w-1/2 flex flex-col justify-center">
              <Image 
                src={HeroImg}
                alt="Hero-image" 
                width={580}
                height={400}
              />
            </figure>

            <article className="md:w-1/2 flex flex-col justify-center">
              {/* TEXT */}
              <h2
                className="text-3xl font-bold pt-8 md:pt-0"
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