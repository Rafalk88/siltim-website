import { useState } from 'react'
import Image from 'next/image'
import Contact from '@/pages/landing/Contact'

import Typography from '../Typography'

import SecuredLetter from "@/public/assets/SecuredLetter.svg"
import CloseIcon from "@/public/assets/close-icon.svg"

type Props = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  modalElement: React.RefObject<HTMLElement> | null
}

const Anchor = ({ isVisible, setIsVisible, modalElement }: Props) => {
  return (
    <>
      {
        !isVisible ? (
          <section
            className="w-[80px] h-[80px] rounded-full flex justify-center
              items-center bg-blue absolute top-[60%] right-[-80%] cursor-pointer
              drop-shadow-md hover:bg-light-blue z-[10]"
            ref={modalElement}
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
        ) : null
      }
      
      {
        isVisible ? (
          <section
            className="fixed top-[32%] right-[5%] bg-white rounded-xl shadow-xl p-5 z-[25]"
            ref={modalElement}
          >
            <div className="bg-blue h-12 mb-8 flex items-center justify-between px-3">
              <Typography
                className="text-white"
                variant="h5"
                as="h5"
              >
                Napisz do Nas!
              </Typography>

              <Image
                className="cursor-pointer"
                src={CloseIcon}
                alt="close-icon"
                onClick={() => setIsVisible(prev => !prev)}
              />
            </div>
            <Contact 
              main={false}
              setIsVisible={setIsVisible}
            />
          </section>
        ) : null
      }
    </>
  )
}

export default Anchor