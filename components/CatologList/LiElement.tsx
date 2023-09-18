import React from 'react'
import Image from 'next/image'

type LiElementProps = {
  className?: string;
  name: string
  imageName: string
  onClick: () => void
}

const LiElement = ({
  className, name, imageName, onClick, ...otherProps
}: LiElementProps) => {
  const imagePath = `/images/${imageName}.png`
  return (
    <>
      <button
        className={className}
        type="button"
        onClick={onClick}
        {...otherProps}
      >
        <Image
          className="w-full flex justify-center"
          src={imagePath}
          alt={`${name} image`}
          width={180}
          height={92}
        >
        </Image>
        <span>{name}</span>
      </button>
    </>
  )
}

export default LiElement