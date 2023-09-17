import React, { useState } from 'react'

import LiElement from './LiElement'
import HoverModal from '../HoverModal'
import Modal from '../Modal'
import Typography from '../Typography'
import { useMediaQuery } from "@/hooks/useMediaQuery"

const fakeData = {
  mainCompound: [
    {
      id: 1,
      name: 'indole',
      image_name: 'indole.png',
      subgroup: [
        {
          id: 'SL-001',
          name: '2-(4-bromo-1H-indol-3-yl)ethanamine',
          image_name: 'idole1.png',
          smiles: 'NCCc1c[nH]c2cccc(Br)c12',
          molecularFormula: 'C10H11BrN2',
          CAS: '108061-74-1',
        },
        {
          id: 'SL-002',
          name: '2-(5-methoxy-1H-indol-3-yl)ethanamine',
          image_name: 'indole2.png',
          smiles: 'COc1ccc2[nH]cc(CCN)c2c1',
          molecularFormula: 'C11H14N2O',
          CAS: '608-07-1',
        }
      ],
    },
    {
      id: 2,
      name: 'benzotriazole',
      image_name: 'benzotriazole.png',
      subgroup: [
        {
          id: 'SL-001',
          name: 'drugie dane',
          image_name: 'idole1.png',
          smiles: 'NCCc1c[nH]c2cccc(Br)c12',
          molecularFormula: 'C10H11BrN2',
          CAS: '108061-74-1',
        },
        {
          id: 'SL-002',
          name: 'drugie dane',
          image_name: 'indole2.png',
          smiles: 'COc1ccc2[nH]cc(CCN)c2c1',
          molecularFormula: 'C11H14N2O',
          CAS: '608-07-1',
        }
      ],
    }
  ]
}

const transformItem = 'transform ease-in-out duration-500'

export const CatalogList = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const [isClicked, setIsClicked] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const handleHoverOnClick = (id: number) => {
    if (isClicked === id) return setIsClicked(null)
    setIsClicked(id)
  }
  const handleOnClick = (id: number) => {
    if (isOpen === id) return setIsOpen(null)
    setIsOpen(id)
  }
  const handleMouseEnter = (id: number) => setIsHovered(id)
  const handleMouseLeave = () =>  setIsHovered(null)

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto pb-16">
        {
          fakeData.mainCompound.map((compound, idx) => {
            const { id, name, image_name, subgroup } = compound
            return (
              <li
                key={`${id}-${idx}`}
                className="relative"
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <LiElement
                  className={`w-full h-[200px] border rounded-xl border-dark-grey hover:border-black
                    opacity-60 hover:opacity-100 ${isClicked === id ? 'opacity-100 border-2' : null} ${transformItem}`}
                  name={name}
                  aria-pressed={isClicked === id}
                  image_name={image_name}
                  onClick={() => handleHoverOnClick(id)}
                />
                {isHovered === id && (
                    <HoverModal
                      className="absolute w-full h-full top-0 right-0 cursor-pointer"
                      isOpen={isHovered}
                      onClick={() => handleHoverOnClick(id)}
                    >
                      <div className="w-[95%] h-[95%] bg-white/80 border-inherit rounded-xl p-4 flex flex-col justify-center">
                        <Typography
                          className="text-center"
                          variant="h4"
                        >
                          Ilość pozycji w grupie:
                        </Typography>
                        <Typography
                          className="text-center"
                          variant="body"
                          as="p"
                        >
                          {subgroup.length}
                        </Typography>
                      </div>
                    </HoverModal>
                  )
                }
              </li>
            )
          })
        }
      </ul>
      {isClicked && (
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto pb-16">
          {fakeData.mainCompound.find(compound => compound.id === isClicked)?.subgroup.map((subItem, idx) => {
            const { id, name, image_name, smiles, CAS, molecularFormula} = subItem
            const splitID = id.split('-')
            const formattedID = Number(splitID[1])
            return (
              <li
                className='relative'
                key={`${id}-${idx}`}
                onClick={() => handleOnClick(formattedID)}
              >
                <LiElement
                  className={`w-full h-[220px] border rounded-xl border-dark-grey hover:border-black
                    opacity-60 hover:opacity-100 ${isOpen === formattedID ? 'opacity-100 border-2' : null} ${transformItem}`}
                  name={name}
                  aria-pressed={isOpen === formattedID}
                  image_name={image_name}
                  onClick={() => handleOnClick(formattedID)}
                />
                {
                  isOpen === formattedID && (
                    <Modal
                      className={`absolute ${isAboveSmallScreens ? 'w-[130%] right-[-65%]' : '[w-100%] right-0'} top-[-15%] cursor-pointer bg-white border rounded-xl border-dark-grey p-2`}
                      isOpen={isOpen}
                      onClose={() => setIsOpen(null)}
                    >
                      <div className="flex flex-col justify-center">
                        <Typography
                          className="text-dark-grey mb-4"
                          variant="h5"
                        >
                          {id}
                        </Typography>
                        <Typography
                          className="text-dark-grey w-full"
                          variant="h6"
                        >
                          Formuła molekularna:
                        </Typography>
                        <Typography
                          className="text-dark-grey flex items-center mb-2"
                          variant="body"
                          as="p"
                        >
                          {molecularFormula}
                        </Typography>
                        <Typography
                          className="text-dark-grey"
                          variant="h6"
                        >
                          Smiles:
                        </Typography>
                        <Typography
                          className="text-dark-grey mb-2"
                          variant="body"
                          as="p"
                        >
                          {smiles}
                        </Typography>
                        <Typography
                          className="text-dark-grey"
                          variant="h6"
                        >
                          CAS:
                        </Typography>
                        <Typography
                          className="text-dark-grey mb-6"
                          variant="body"
                          as="p"
                        >
                          {CAS}
                        </Typography>
                        <Typography
                          className="text-dark-grey font-normal"
                          variant="h6"
                        >
                          W razie pytań zachęcamy do kontaktu:
                        </Typography>
                        <Typography
                          className="text-dark-grey"
                          variant="body"
                          as="p"
                        >
                          office@siltim.com
                        </Typography>
                      </div>
                    </Modal>
                  )
                }
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default CatalogList
