import { useState } from 'react'
import Image from 'next/image'
import Contact from '@/pages/landing/Contact'

import SecuredLetter from "@/public/assets/SecuredLetter.svg"

const Anchor = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <section className="w-[80px] h-[80px] rounded-full flex justify-center
        items-center bg-blue fixed top-[85%] right-[1%] cursor-pointer
        drop-shadow-md hover:bg-blue/80 z-[1]"
      >
        <button 
          className="cursor-pointer"
          onClick={() => setIsVisible(prev => !prev)}
        >
          <Image
            src={SecuredLetter}
            alt={"Contact-icon"}
            width={46}
            height={46}
          />
        </button>
      </section>
      {
        isVisible ? (
          <div className="bg-white">
            banan
          </div>
        ) : null
      }
    </>
  )
}

export default Anchor