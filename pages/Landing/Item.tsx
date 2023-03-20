import React from 'react'
import Link from 'next/link'
import { ShoppingCartIcon, BeakerIcon, ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline"

type Props = {
  title: string
  icon: string
}

const Item = ({ title, icon }: Props) => {

  return (
    <article className="relative cursor-pointer
      border rounded-xl mb-6 md:w-1/3"
    >
      <Link
        className="flex flex-col items-center"
        href={`/${icon}`}
      >
        <p className="flex justify-center py-6 bg-af-white
          opacity-75"
        >
          {title}
        </p>
        {
          (icon === "shop")
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
          (icon === "synthesis")
          ? 
          <ArrowPathRoundedSquareIcon className="w-[120px] h-[120px] my-6" />
          :
          null
        }
      </Link>
    </article>
  )
}

export default Item