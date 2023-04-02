import { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"

import Layout from '../components/Layout'

import './global.css'
import type { AppProps } from 'next/app'

import Loader from './../components/loader'

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
