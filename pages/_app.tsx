import { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'

import Layout from '../components/Layout'
import Loader from '../components/Loader'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './global.css'

import type { AppProps } from 'next/app'

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`
  }
})

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {
          isLoading ? <Loader /> : null
        }
      </ChakraProvider>
    </>
  )
}
