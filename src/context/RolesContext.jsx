import { createContext, useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const RolesContext = createContext();

export const RolesProvider = ({ children }) => {
  const { session } = useAuth();
  const [cargo, setCargo] = useState(null);

  useEffect(() => {
    if (session) {
      setCargo(session.rol);
    } else {
      setCargo(null);
    }
  }, [session]);

  return (
    <RolesContext.Provider value={{ cargo, setCargo }}>
      {children}
    </RolesContext.Provider>
  );
};

export default RolesContext;