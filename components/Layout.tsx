import { useRef } from 'react'

import TopDiv from "./TopDiv"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ToTopModal from "./ToTopModal"

import { useMediaQuery } from "@/hooks/useMediaQuery"

type Props = {
  children: React.ReactNode
  isTopOfPage: boolean
}

const Layout = ({ children, isTopOfPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1400px)")
  const footerRef = useRef(null)

  return (
    <section id="top">
      {
        isAboveMediumScreens ? (
          <>
            <ToTopModal id="top" footerRef={footerRef} />
            <TopDiv />
          </>
        )
        :
        null
      }
      <Navbar 
        isTopOfPage={isTopOfPage}
      />
      <main>
        {children}
      </main>
      <Footer footerRef={footerRef} />
    </section>
  )
}

export default Layout