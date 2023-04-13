import { useState, useEffect } from 'react'
import { ChakraProvider } from "@chakra-ui/react"

import Layout from '../components/Layout'
import Loader from '../components/Loader'

import { theme } from '../components/theme'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './global.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
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
    <>
      <ChakraProvider theme={theme}>
        <Layout isTopOfPage={isTopOfPage}>
          <Component {...pageProps} isTopOfPage={isTopOfPage} />
        </Layout>
        {
          isLoading ? <Loader /> : null
        }
      </ChakraProvider>
    </>
  )
}
