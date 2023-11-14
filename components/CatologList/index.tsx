import React, { useState, Dispatch, SetStateAction } from 'react'
import { Link as ScrollLink } from 'react-scroll'

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
  groupName: string
  imageName: string
}

const transformItem = 'transform ease-in-out duration-400'

export const CatalogList = ({
    groupOfProducts, selectedGroup, setSelectedGroup, product,
  }: CatalogListProps) => {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<string | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  console.log(product[0].group)

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
  const toggleTitle = (value: string | null) => {
    setTitle((prevState) => {
      if (prevState === value) return null
      return value
    })
  }

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto">
        {
          groupOfProducts && groupOfProducts.map((compound: GroupOfProducts, idx: number) => {
            const { id, name, groupName, imageName } = compound
            return (
              <li
                key={`${id}-${idx}`}
                className="relative"
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <LiElement
                  className={`w-full h-[200px] border rounded-xl border-dark-grey hover:border-black
                    ${selectedGroup === id ? 'border-4' : null} ${transformItem}`}
                  name={groupName}
                  aria-pressed={selectedGroup === name}
                  imageName={imageName}
                  onClick={() => {
                    handleOnClickGroup(name)
                    toggleTitle(groupName)
                  }}
                />
                {isHovered === id && (
                    <ScrollLink
                      to="scrollTo"
                      smooth={true}
                      duration={500}
                    >
                      <HoverModal
                        className="absolute w-full h-full top-0 right-0 cursor-pointer"
                        isOpen={isHovered}
                        onClick={() => {
                          handleOnClickGroup(name)
                          toggleTitle(groupName)
                        }}
                      >
                        <Typography
                          className="w-[95%] h-[95%] bg-white/80 border-inherit rounded-xl p-4 flex flex-col justify-center text-center"
                          variant="h4"
                        >
                          Kliknij aby rozwinąć
                        </Typography>
                      </HoverModal>
                    </ScrollLink>
                  )
                }
              </li>
            )
          })
        }
      </ul>
      <div id="scrollTo">
        <Typography
          className="text-center text-dark-grey py-10"
          variant="h5"
        >
          {title}
        </Typography>
      </div>
      {selectedGroup && product && (
        <ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto pb-16"
        >
          {product.map((item: any, idx: number) => {
            if (selectedGroup === item.group) {
              const { id, name, image, smiles, cas, molecularFormula } = item
              const splitID = id.split('-')
              const formattedID = splitID[1]
              return (
                <li
                  className='relative'
                  key={`${id}-${idx}`}
                >
                  <LiElement
                    className={`w-full h-[220px] border rounded-xl border-dark-grey
                      hover:border-2 ${isOpen === formattedID ? 'border-2' : null} ${transformItem}`}
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
            }
          })}
        </ul>
      )}
    </>
  )
}

export default CatalogList
