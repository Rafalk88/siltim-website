import React, { useState, useEffect } from 'react';

import Navbar from './Navbar'
import Landing from './Landing';

const Home = () => {
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
      <Navbar 
        isTopOfPage={isTopOfPage}
      />
      <Landing />
    </>
  )
};

export default Home;
