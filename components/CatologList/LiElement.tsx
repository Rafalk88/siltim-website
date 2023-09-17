import React from 'react'
import Image from 'next/image'

type LiElementProps = {
  className?: string;
  name: string
  image_name: string
  onClick: () => void
}

const LiElement = ({
  className, name, image_name, onClick, ...otherProps
}: LiElementProps) => {
  const imagePath = `/images/${image_name}`
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