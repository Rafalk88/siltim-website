import React, { Dispatch, SetStateAction } from 'react'

import Typography from '../Typography'
import Modal from '../Modal'
import { useMediaQuery } from "@/hooks/useMediaQuery"

import { SelectedGroup } from '.'

type SubgroupModalProps = {
  isOpen: SelectedGroup
  setIsOpen: Dispatch<SetStateAction<SelectedGroup>>
  id: string
  molecularFormula: string
  smiles: string
  cas: string
}

const SubgroupModal = ({ isOpen, setIsOpen, id, molecularFormula, smiles, cas }: SubgroupModalProps) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

  return (
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
          {cas}
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

export default SubgroupModal