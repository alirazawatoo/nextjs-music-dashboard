import { useEffect, useState } from 'react';

export const useIsAuthenticated = () => {
  let inititalState: string | null = null
  
  if(typeof window !== 'undefined'){
 inititalState = localStorage.getItem('access_token');
  }
  const [isAuthenticated, setIsAuthenticated] = useState(!!inititalState);

  useEffect(() => {
    const onStorage = () => {
      setIsAuthenticated(!!inititalState);
    };

    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return isAuthenticated;
};
