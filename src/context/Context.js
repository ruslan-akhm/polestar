import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const Provider=({ children })=>{

    const [isMenu, setIsMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    return( 
      <div>
          <Context.Provider value={{isMenu,setIsMenu, isMobile, setIsMobile}}>
              { children }
          </Context.Provider>
      </div>
    )
}