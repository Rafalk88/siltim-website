import React from 'react'
import Typography from '../Typography'

type ModalProps = {
  className?: string
  isOpen: string | null
  onClose?: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const Modal = ({ className, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className={`flex flex-col items-end justify-center ${className} z-[25]`}>
      <button
        type="button"
        onClick={() => onClose && onClose(false)}
      >
        <Typography
          className="font-bold text-dark-grey py-2 px-4 hover:text-black"
          variant="body"
          as="p"
        >
          X
        </Typography>
      </button>
      {children}
    </div>
  )
}

export default Modal