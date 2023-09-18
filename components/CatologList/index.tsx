import React, { useState, Dispatch, SetStateAction, useEffect } from 'react'

import LiElement from './LiElement'
import HoverModal from '../HoverModal'
import Modal from '../Modal'
import Typography from '../Typography'
import { useMediaQuery } from "@/hooks/useMediaQuery"

type SelectedGroup = string | null

type CatalogListProps ={
  groupOfProducts: any
  selectedGroup: SelectedGroup
  setSelectedGroup: Dispatch<SetStateAction<SelectedGroup>>
  product: any
}

type GroupOfProducts = {
  _id: string
  id: string
  name: string
  imageName: string
}

const transformItem = 'transform ease-in-out duration-400'

export const CatalogList = ({
    groupOfProducts, selectedGroup, setSelectedGroup, product,
  }: CatalogListProps) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<string | null>(null)

  const handleOnClickGroup = (name: string) => {
    setSelectedGroup((prevSelectedGroup) => {
      if (name && prevSelectedGroup === name) {
        return null;
      }
      return name || prevSelectedGroup;
    });
  }
  const handleOnClickSubgroup = (id: string) => {
    if (isOpen === id) return setIsOpen(null)
    
    setIsOpen(id)
  }
  const handleMouseEnter = (id: string) => setIsHovered(id)
  const handleMouseLeave = () =>  setIsHovered(null)

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto pb-16">
        {
          groupOfProducts.map((compound: GroupOfProducts, idx: number) => {
            const { id, name, imageName } = compound
            return (
              <li
                key={`${id}-${idx}`}
                className="relative"
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <LiElement
                  className={`w-full h-[200px] border rounded-xl border-dark-grey hover:border-black
                    opacity-60 hover:opacity-100 ${selectedGroup === id ? 'opacity-100 border-4' : null} ${transformItem}`}
                  name={name}
                  aria-pressed={selectedGroup === name}
                  imageName={imageName}
                  onClick={() => handleOnClickGroup(name)}
                />
                {isHovered === id && (
                    <HoverModal
                      className="absolute w-full h-full top-0 right-0 cursor-pointer"
                      isOpen={isHovered}
                      onClick={() => handleOnClickGroup(name)}
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
                          Zrobić
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
      {selectedGroup && product && (
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto pb-16">
          {product.products.map((item: any, idx: number) => {
            const { id, name, imageName, smiles, CAS, molecularFormula} = item
            const splitID = id.split('-')
            const formattedID = splitID[1]
            return (
              <li
                className='relative'
                key={`${id}-${idx}`}
                onClick={() => handleOnClickSubgroup(formattedID)}
              >
                <LiElement
                  className={`w-full h-[220px] border rounded-xl border-dark-grey hover:border-black
                    opacity-60 hover:opacity-100 ${isOpen === formattedID ? 'opacity-100 border-2' : null} ${transformItem}`}
                  name={name}
                  aria-pressed={isOpen === formattedID}
                  imageName={imageName}
                  onClick={() => handleOnClickSubgroup(formattedID)}
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
