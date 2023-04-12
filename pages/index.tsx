import React from 'react';
import Landing from './landing';

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
