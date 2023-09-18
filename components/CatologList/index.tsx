import React, { useState, Dispatch, SetStateAction } from 'react'

import LiElement from './LiElement'
import HoverModal from '../HoverModal'
import Typography from '../Typography'
import SubgroupModal from './SubgroupModal'

export type SelectedGroup = string | null

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
            const { id, name, image, smiles, cas, molecularFormula } = item
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
                  imageName={image}
                  onClick={() => handleOnClickSubgroup(formattedID)}
                />
                {
                  isOpen === formattedID && (
                    <SubgroupModal
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      id={id}
                      molecularFormula={molecularFormula}
                      smiles={smiles}
                      cas={cas}
                    />
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
