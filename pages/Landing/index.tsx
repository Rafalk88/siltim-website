import Image from "next/image"
import { Button } from "@chakra-ui/react"

import AboutUs from "./AboutUs"
import Contact from "./Contact"

import { useMediaQuery } from "@/hooks/useMediaQuery"

import HeroImg from "@/public/assets/hero.png"
import Arrow from "@/public/assets/Arrow.svg"

type Props = {
  isTopOfPage: boolean
}

const Landing = ({ isTopOfPage }:Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section className="gap-16">
        <div
          className="w-full"
        >
          {/* HERO */}
          <section className="mx-auto w-5/6 sm:h-[calc(100vh/1.05)] max-w-[1200px] pt-24 md:pt-56 flex flex-col
            justify-between items-center"
          >
            <div className="md:flex md:justify-between md:gap-8 pb-12 md:pb-0">
              <figure className="py-14 md:py-0 flex flex-col items-center md:items-end md:order-2
                md:w-1/2 z-[-1]"
              >
                <Image
                  src={HeroImg}
                  alt="Hero-image"
                />
              </figure>

              <article className="w-3/4 pt-10 pb-20 md:w-1/2 flex flex-col justify-center">
                {/* TEXT */}
                <h2
                  className="text-5xl font-extrabold text-dark-grey pt-8 md:pt-0"
                >
                  Advanced materials for molecular design
                </h2>
                <p className="pt-8 text-lg text-dark-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin risus
                  eu purus aliquam, et pellentesque risus luctus. Duis elementum purus vitae mauris
                  facilisis cursus. Aliquam convallis
                </p>
                <p className="pt-9 text-lg text-dark-grey">Pełny katalog produktów do pobrania:</p>
                <Button
                  className="w-[200px] h-[45px] mt-3 shadow-sm
                    duration-500 font-bold"
                  data-role="download"
                  variant="secondary"
                >
                  Pobierz
                </Button>
              </article>
            </div>
            
            {
              (isTopOfPage && isAboveMediumScreens) ? (
                <Image
                  className="md:block md:order-2"
                  src={Arrow}
                  alt={"info-arrow"}
                />
              ) : null
            }
          </section>
          
          {/* CALL TO ACTION R&D */}
          <AboutUs />

          {/* CONTACT */}
          <Contact />

        </div>
    </section>
  )
}

export default Landing