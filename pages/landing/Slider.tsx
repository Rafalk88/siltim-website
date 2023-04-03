import Image from "next/image"
import Slider from "react-slick"

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"

import Image1 from "../../public/assets/image-1.jpg"
import Image2 from "../../public/assets/image-2.jpg"
import Image3 from "../../public/assets/image-3.jpg"
import Image4 from "../../public/assets/image-4.jpg"
import Image5 from "../../public/assets/image-5.jpg"

type Props = {
  className: string
}

type BtnProps = {
  className?: string
  onClick?: () => void
}

const settings = {
  dots: true,
  infinite: true,
  speed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
}

function SampleNextArrow(props: BtnProps) {
  const arrow = <ArrowRightCircleIcon />

  const { className, onClick } = props;
  return (
    <button
      className={`${className} block before:content-arrow-right`}
      onClick={onClick}
      data-role="none"
    />
  );
}

function SamplePrevArrow(props: BtnProps) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} block before:content-arrow-left`}
      onClick={onClick}
      data-role="none"
    />
  );
}

const ChemSlider = ({ className }: Props) => {

  return (
    <section className={className}>
      <Slider {...settings}>
        <figure className="p-2">
          <Image 
            src={Image1}
            alt="slide-1"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={Image2}
            alt="slide-2"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={Image3}
            alt="slide-3"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={Image4}
            alt="slide-4"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={Image5}
            alt="slide-5"
          />
        </figure>
      </Slider>
    </section>
  )
}

export default ChemSlider
