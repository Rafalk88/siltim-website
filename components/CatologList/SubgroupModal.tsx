import React, { Dispatch, SetStateAction } from 'react'
import { useToast } from "@chakra-ui/react"

import Typography from '../Typography'
import Modal from '../Modal'
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { copyToClipBoard } from '@/lib/copyToClipBoard'

import { SelectedGroup } from '.'

type SubgroupModalProps = {
  isOpen: SelectedGroup
  setIsOpen: Dispatch<SetStateAction<SelectedGroup>>
  id: string
  molecularFormula: string
  smiles: string
  cas: string
}

const chemicalFormula = (formula: string) => {
  const splitFormula = (formula: string) => {
    const parts = [];
    let currentPart = '';

    for (let i = 0; i < formula.length; i++) {
      const char = formula[i];
      if (/[A-Za-z]/.test(char)) {
        if (currentPart !== '') {
          parts.push(currentPart);
          currentPart = '';
        }
        parts.push(char);
      } else {
        currentPart += char;
      }
    }

    if (currentPart !== '') {
      parts.push(currentPart);
    }

    return parts.map((part, index) => {
      if (/[A-Za-z]/.test(part)) {
        return <span key={index}>{part}</span>;
      } else {
        return <sub key={index}>{part}</sub>;
      }
    });
  };

  return (
    <>
      {splitFormula(formula)}
    </>
  );
}

const SubgroupModal = ({ isOpen, setIsOpen, id, molecularFormula, smiles, cas }: SubgroupModalProps) => {
  const toast = useToast()
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const [, copy] = useCopyToClipboard()

  return (
    <Modal
      className={`absolute ${isAboveSmallScreens ? 'w-[130%] right-[-65%]' : '[w-100%] right-0'} top-[-15%]
        bg-white border rounded-xl border-dark-grey p-2`
      }
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
          className="text-dark-grey mb-2 hover:text-black hover:underline w-fit cursor-pointer"
          variant="body"
          as="p"
          onClick={() => copyToClipBoard(molecularFormula, copy, toast)}
        >
          {chemicalFormula(molecularFormula)}
        </Typography>
        <Typography
          className="text-dark-grey"
          variant="h6"
        >
          Smiles:
        </Typography>
        <Typography
          className="text-dark-grey mb-2 hover:text-black hover:underline w-fit cursor-pointer"
          variant="body"
          as="p"
          onClick={() => copyToClipBoard(smiles, copy, toast)}
        >
          Kopiuj Smiles
        </Typography>
        {
          cas && (
            <>
              <Typography
                className="text-dark-grey"
                variant="h6"
              >
                CAS:
              </Typography>
              <Typography
                className="text-dark-grey mb-6 hover:text-black hover:underline w-fit cursor-pointer"
                variant="body"
                as="p"
                onClick={() => copyToClipBoard(cas, copy, toast)}
              >
                {cas}
              </Typography>
            </>
          )
        }
        <Typography
          className="text-dark-grey font-normal"
          variant="h6"
        >
          W razie pytań zachęcamy do kontaktu:
        </Typography>
        <Typography
          className="text-dark-grey hover:text-black hover:underline w-fit cursor-pointer"
          variant="body"
          as="p"
          onClick={() => copyToClipBoard('office@siltim.com', copy, toast)}
        >
          office@siltim.com
        </Typography>
      </div>
    </Modal>
  )
}

export default SubgroupModal