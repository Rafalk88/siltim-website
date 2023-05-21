import Image from "next/image"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"

import SocialMediaIcons from "../SocialMediaIcons"
import SecuredLetter from "@/public/assets/SecuredLetter.svg"
import PlaceMarker from "@/public/assets/PlaceMarker.svg"

const textStyles = "text-white ml-2 cursor-pointer"

const TopDiv = () => {
  const [text, copy] = useCopyToClipboard()

  return (
    <section className="w-full h-[40px] bg-blue">
      <div className="mx-auto w-5/6 max-w-[1200px] h-full flex justify-between 
        items-center"
      >
        <div className="flex">
          <Image
            className="ml-2"
            src={SecuredLetter}
            alt={"Letter-icon"}
            width={24}
            height={24}
          />
          <p
            className={textStyles}
            onClick={() => copy('office@siltim.com')}
          >
            office@siltim.com
          </p>
          <Image
            className="ml-2"
            src={PlaceMarker}
            alt={"Location-icon"}
            width={24}
            height={24}
          />
          <p className={textStyles}>Św. Jana 11/4, 40-012 Katowice, Polska</p>
        </div>
        
        <SocialMediaIcons width={23} height={23} />
      </div>
    </section>
  )
}

export default TopDiv