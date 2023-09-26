import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

import Anchor from '../Anchor'
import UpArrow from '@/public/assets/UpArrow.svg'
// import { useElementPosition } from '@/hooks/useElementPosition'

type Props = {
  id: string
  footerRef: React.RefObject<HTMLElement> | null
}

const ToTopModal = ({ id, footerRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const modalElement = useRef(null)
  // const modalPosition = useElementPosition(modalElement, 'bottom')
  // const stopPosition = useElementPosition(footerRef, 'top')
  const difference = (true) ? 'fixed' : 'absolute'

  return (
    <div className={`${difference} top-[82%] right-[80px]`}>
      {
        !isVisible ? (
          <ScrollLink
            className="w-[60px] h-[60px] rounded-full flex justify-center
              items-center bg-dark-grey cursor-pointer drop-shadow-md
              hover:bg-grey z-[5]"
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
        modalElement={modalElement}
      />
    </div>
  )
}

export default ToTopModal