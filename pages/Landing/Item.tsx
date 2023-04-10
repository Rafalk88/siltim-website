import React from 'react'
import Link from 'next/link'
import { ShoppingBagIcon, CubeIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid"

type Props = {
  title: string
  icon: string
}

const Item = ({ title, icon }: Props) => {

  return (
    <article
      className="cursor-pointer mb-6 w-[250px] bg-slate-200
        hover:scale-105 transition duration-200"
    >
      <Link
        className="flex flex-col items-center"
        href={`/${icon}`}
      >
        <p className="flex justify-center pt-6 opacity-75 font-rajdhani font-bold"
        >
          {title}
        </p>
        {
          (icon === "shop")
          ? 
          <ShoppingBagIcon className="w-[100px] h-[100px] my-6" />
          :
          null
        }
        {
          (icon === "catalysts")
          ? 
          <CubeIcon className="w-[100px] h-[100px] my-6" />
          :
          null
        }
        {
          (icon === "synthesis")
          ? 
          <ClipboardDocumentListIcon className="w-[100px] h-[100px] my-6" />
          :
          null
        }
      </Link>
    </article>
  )
}

export default Item