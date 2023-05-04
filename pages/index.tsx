import Head from 'next/head';
import React from 'react';
import Landing from './landing';

type Props = {
  isTopOfPage: boolean
}

const Home = ({ isTopOfPage }:Props) => {
  
  return (
    <>
      <Head>
        <title>Siltim Sp. z o.o. | Strona główna</title>
      </Head>
      <Landing isTopOfPage={isTopOfPage} />
    </>
  )
};

export default Home;
