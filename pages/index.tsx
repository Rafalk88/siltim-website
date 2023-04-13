import React from 'react';
import Landing from './Landing';

type Props = {
  isTopOfPage: boolean
}

const Home = ({ isTopOfPage, ...otherProps }:Props) => {
  return (
    <>
      <Landing isTopOfPage={isTopOfPage} />
    </>
  )
};

export default Home;
