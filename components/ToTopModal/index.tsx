import React, { useState } from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

import Anchor from '../Anchor'
import UpArrow from '@/public/assets/UpArrow.svg'

type Props = {
  id: string
}

const ToTopModal = ({ id }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative">
      {
        !isVisible ? (
          <ScrollLink
            className="w-[60px] h-[60px] rounded-full flex justify-center
              items-center bg-dark-grey fixed top-[82%] right-[80px] cursor-pointer
              drop-shadow-md hover:bg-grey z-[5]"
            to={id}
            smooth={true}
            duration={500}
          >
            <Image
              src={UpArrow}
              alt={"UpArrow icon"}
              width={40}
              height={40}
            />
          </ScrollLink>
        ) : null
      }
      <Anchor
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  )
}

export default ToTopModal