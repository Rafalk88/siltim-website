import React from 'react'
import { ShoppingCartIcon, BeakerIcon, ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline"

type Props = {
  title: string
  icon: string
}

const Item = ({ title, icon }: Props) => {

  {console.log(icon)}
  return (
    <article className="relative w-1/3 cursor-pointer
      border rounded-xl"
    >
      <div className="flex flex-col items-center">
        <p className="flex justify-center py-6 bg-af-white
          opacity-75"
        >
          {title}
        </p>
        {
          (icon === "shopping")
          ? 
          <ShoppingCartIcon className="w-[120px] h-[120px] my-6" />
          :
          null
        }
        {
          (icon === "catalysts")
          ? 
          <BeakerIcon className="w-[120px] h-[120px] my-6" />
          :
          null
        }
        {
          (icon === "order")
          ? 
          <ArrowPathRoundedSquareIcon className="w-[120px] h-[120px] my-6" />
          :
          null
        }
      </div>
    </article>
  )
}

export default Item