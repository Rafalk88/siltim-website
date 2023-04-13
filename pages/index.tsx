import React from 'react';
import Landing from './landing';

type Props = {
  isTopOfPage: boolean
}

const Home = ({ isTopOfPage }:Props) => {
  
  return (
    <>
      {/*@ts-ignore*/}
      <Landing isTopOfPage={isTopOfPage} />
    </>
  )
};

export default Home;
