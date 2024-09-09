import React, { useState, useEffect } from "react";
import VerticalPixelTransition from "./vertical/index";
import HorizontalPixelTransition from "./horizontal/index";
import CenterPixelTransition from "./center/index";
// import styles from "./style.module.scss";

export default function PageLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    // Automatically switch animations every 1 second
    const animationCycle = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 3);
    }, 1000);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(animationCycle);
      clearTimeout(timer);
    };
  }, []);

  const renderAnimation = () => {
    switch (currentAnimation) {
      case 0:
        return <VerticalPixelTransition menuIsActive={isLoading} />;
      case 1:
        // return <HorizontalPixelTransition menuIsActive={isLoading} />;
      case 2:
        // return <CenterPixelTransition menuIsActive={isLoading} />;
      default:
        return <VerticalPixelTransition menuIsActive={isLoading} />;
    }
  };

  return (
    <div className="">
      {isLoading && renderAnimation()}
    </div>
  );
}
