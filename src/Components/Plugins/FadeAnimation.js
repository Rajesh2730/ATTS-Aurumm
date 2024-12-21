import React from "react";
import { useInView } from "react-intersection-observer";
import "./FadeInSection.css"; 

const FadeAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: false, 
  });

  return (
    <div
      ref={ref}
      className={`fade-section ${inView ? "fade-in" : "fade-out"}`}
    >
      {children}
    </div>
  );
};

export default FadeAnimation;
