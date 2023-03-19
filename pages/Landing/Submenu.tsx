import React from 'react'

type Props = {
  children: React.ReactNode
}

const Submenu = ({ children }: Props) => {
  return (
    <section className="flex justify-between w-5/6 max-w-[1200px] mx-auto pt-12 gap-2">
      {children}
    </section>
  )
}

export default Submenu