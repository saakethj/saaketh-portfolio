import { useEffect, useRef, useState } from "react";

export const useMouse = () => {
  const [mouse, setMouse] = useState({
    elementX: null,
    elementY: null,
    elementPositionX: null,
    elementPositionY: null,
    clientX: null,
    clientY: null,
  });
  
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMouse({
          elementX: event.clientX - rect.left,
          elementY: event.clientY - rect.top,
          elementPositionX: rect.left,
          elementPositionY: rect.top,
          clientX: event.clientX,
          clientY: event.clientY,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return [mouse, ref];
};