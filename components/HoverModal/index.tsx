import React from 'react';

type ModalProps = {
  className?: string
  isOpen: number | null
  children: React.ReactNode
  onClick?: () => void
}

export const HoverModal = ({ className, isOpen, onClick, children }: ModalProps) => {
  return isOpen ? (
    <div
      className={`flex flex-col items-center justify-center ${className} z-[100]`}
      onClick={onClick}
    >
      {children}
    </div>
  ) : null;
}

export default HoverModal;
