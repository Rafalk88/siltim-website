import { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"

import Layout from '../components/Layout'
import Loader from './../components/loader'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './global.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <>
      <ChakraProvider>
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
