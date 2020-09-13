import { useEffect, useState } from 'react';
import { SMALL_SCREEN } from '../consts';
import _debounce from 'lodash.debounce';

// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = _debounce(() => setWidth(window.innerWidth), 100);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = width <= SMALL_SCREEN;

  return { width, isMobile };
};

export default useViewport;
