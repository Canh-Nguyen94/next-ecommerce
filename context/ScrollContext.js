import React, { useState,useCallback,useContext, useEffect } from "react";

const ScrollContext = React.createContext({scrollY:0});
export const useScroll = () => useContext(ScrollContext);
function ScrollContextProvider({ children }) {
  const [scrollY, setScrollY] = useState();
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollContextProvider;
