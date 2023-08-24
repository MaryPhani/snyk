import { useState, useLayoutEffect, useEffect } from "react";
import { deviceSize } from "./constant";

export const isMobileView = () => {
  const [size, setSize] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
  }

  useEffect(() => {
    const windowSize = size;
    if (windowSize <= deviceSize?.SMALL) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return isMobile;
};

export default isMobileView;
