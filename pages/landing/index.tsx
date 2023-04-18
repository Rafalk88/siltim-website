import Image from "next/image"
import { Button } from "@chakra-ui/react"

import Typography from "@/components/Typography"
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
          <section className="mx-auto w-5/6 md:min-h-[calc(100vh/1.05)] xl:min-h-full max-w-[1200px]
            pt-24 md:pt-56 flex flex-col justify-between items-center xl:mb-20"
          >
            <div className="pb-12 md:pb-0 md:flex md:justify-between md:gap-8 ">
              <figure className="py-14 md:py-0 flex flex-col items-center md:items-end md:order-2
                md:w-1/2 z-[-1]"
              >
                <Image
                  src={HeroImg}
                  alt="Hero-image"
                />
              </figure>

              <article className="sm:w-3/4 pt-10 pb-20 md:w-1/2 flex flex-col justify-center">
                {/* TEXT */}
                <Typography
                  className="font-extrabold text-dark-grey pt-8 md:pt-0"
                  variant="h1"
                  as="h2"
                >
                  Advanced materials for molecular design
                </Typography>
                <Typography
                  className="pt-8 text-dark-grey"
                  variant="body"
                  as="p"
                >
                  Związki chemiczne, które umieściliśmy w naszym katalogu to propozycje do wykorzystania
                  w kolejnych syntezach chemicznych związanych szczególnie z projektami odkrywania leków,
                  barwników fluorescencyjnych, katalizatorów heterogenicznych oraz związków zapachowych.
                </Typography>
                <Typography
                  className="pt-9 text-dark-grey"
                  variant="body"
                  as="p"
                >
                  Pełny katalog produktów do pobrania:
                </Typography>
                <Button
                  className="w-full sm:w-[200px] h-[45px] mt-3 shadow-sm
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
                  className="md:block md:order-2 xl:hidden"
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