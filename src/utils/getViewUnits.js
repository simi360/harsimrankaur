import { useState, useEffect } from "react";

const GetViewUnits = (props) => {
  const [vw, setVW] = useState(window.innerWidth * (props.coef / 100));
  const [vh, setVH] = useState(window.innerHeight * (props.coef / 100));

  useEffect(() => {
    const handleWindowResize = () => {
      setVW(window.innerWidth * (props.coef / 100));
      setVH(window.innerHeight * (props.coef / 100));
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [props.coef]);

  // Return the width so we can use it in our components
  return { vw, vh };
};

export default GetViewUnits;
