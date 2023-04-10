import Image from "next/image"
import Slider from "react-slick"

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"

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
            src={""}
            alt="slide-1"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={""}
            alt="slide-2"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={""}
            alt="slide-3"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={""}
            alt="slide-4"
          />
        </figure>

        <figure className="p-2">
          <Image 
            src={""}
            alt="slide-5"
          />
        </figure>
      </Slider>
    </section>
  )
}

export default ChemSlider
