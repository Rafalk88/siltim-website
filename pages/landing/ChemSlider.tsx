import Image from "next/image"
import Slider from "react-slick"

import { useMediaQuery } from "@/hooks/useMediaQuery"

import Image1 from "@/public/assets/carousel_image_1.jpeg"
import Image2 from "@/public/assets/carousel_image_2.jpeg"
import Image3 from "@/public/assets/carousel_image_3.jpeg"

type Props = {
  className?: string
}

type BtnProps = {
  className?: string
  onClick?: () => void
}
// ffff
const imagesStyles = "p-2"

function NextArrow(props: BtnProps) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} block before:content-arrow-right rounded-full w-[42px] h-[42px]
        right-[-65px] drop-shadow-lg bg-white hover:bg-light-grey`
      }
      onClick={onClick}
      data-role="none"
    />
  );
}

function PrevArrow(props: BtnProps) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} block before:content-arrow-left rounded-full w-[42px] h-[42px]
      left-[-65px] drop-shadow-lg bg-white hover:bg-light-grey`}
      onClick={onClick}
      data-role="none"
    />
  );
}

const ChemSlider = ({ className }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)")
  const showArrowsAndDots = isAboveMediumScreens ? true : false

  const settings = {
    dots: showArrowsAndDots,
    arrows: showArrowsAndDots,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <section className={className}>
      <Slider {...settings}>
        <figure className={imagesStyles}>
          <Image 
            src={Image1}
            alt="slide-1"
          />
        </figure>

        <figure className={imagesStyles}>
          <Image 
            src={Image2}
            alt="slide-2"
          />
        </figure>

        <figure className={imagesStyles}>
          <Image 
            src={Image3}
            alt="slide-3"
          />
        </figure>
      </Slider>
    </section>
  )
}

export default ChemSlider
