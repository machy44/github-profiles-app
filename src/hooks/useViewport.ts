import { useEffect, useState } from 'react';
import { SMALL_SCREEN } from '../consts';

// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = width <= SMALL_SCREEN;

  return { width, isMobile };
};

export default useViewport;
