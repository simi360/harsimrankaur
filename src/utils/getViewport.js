import React, { useState, useEffect, createContext, useContext } from "react";

const ViewPortWidth = createContext(null);

const ViewportWidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return (
    <ViewPortWidth.Provider value={width}>{children}</ViewPortWidth.Provider>
  );
};

export default ViewportWidthProvider;
export const useViewPortWidth = () => useContext(ViewPortWidth);
