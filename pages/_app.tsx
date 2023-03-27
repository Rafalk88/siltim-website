import { useState } from 'react'
import Layout from '../components/Layout'
import './global.css'
import type { AppProps } from 'next/app'

import Loader from './../components/loader'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {
        isLoading ? <Loader /> : null
      }
    </>
  )
}
