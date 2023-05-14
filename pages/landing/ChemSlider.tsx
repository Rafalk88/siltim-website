import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import { useMediaQuery } from "../../hooks/useMediaQuery"

import Image1 from "@/public/assets/carousel_image_1.jpeg"
import Image2 from "@/public/assets/carousel_image_2.jpeg"
import Image3 from "@/public/assets/carousel_image_3.jpeg"

import "@splidejs/react-splide/css"

const ChemSlider = () => {
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 767px)")
  const width = isAboveMediumScreens ? 650 : 300
  const height = isAboveMediumScreens ? 350 : 200
  const arrows = isAboveMediumScreens ? true : false

  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    arrows: arrows,
    pauseOnHover: false,
    resetProgress: false,
    speed: 7000,
    width: `${width}px`,
    height: `${height}px`,
    autoWidth: true,
    autoHeight: true,
    perPage: 1,
    pagination: false,
  }

  return (
    <Splide 
      tag="section"
      aria-label="My Favorite Images"
      options={options}
      className="mx-auto"
    >
      <SplideSlide>
        <Image
          src={Image1}
          alt="Splide-image-1"
          width={width}
          height={height}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={Image2}
          alt="Splide-image-2"
          width={width}
          height={height}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={Image3}
          alt="Splide-image-3"
          width={width}
          height={height}
        />
      </SplideSlide>
    </Splide>
  )
}

export default ChemSlider
