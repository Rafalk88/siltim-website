import { useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const hookHandleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', hookHandleScroll)

    return () => {
      window.removeEventListener('scroll', hookHandleScroll);
    }
  }, [])

  return scrollPosition;
}
