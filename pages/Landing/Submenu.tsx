import React from 'react'

type Props = {
  children: React.ReactNode
}

const Submenu = ({ children }: Props) => {
  return (
    <section className="">
      {children}
    </section>
  )
}

export default Submenu