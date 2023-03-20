import React, { useState, useEffect } from 'react';

import Navbar from './navbar'
import Footer from "./footer"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() =>{
    const handleScroll = () => {
      if (!window.scrollY) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section>
      <Navbar 
        isTopOfPage={isTopOfPage}
      />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </section>
  )
}

export default Layout