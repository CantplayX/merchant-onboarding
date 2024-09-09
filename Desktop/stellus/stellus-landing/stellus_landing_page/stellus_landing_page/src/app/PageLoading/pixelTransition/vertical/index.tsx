import React, { useState, useEffect } from "react";
import "./style.css";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay: any) => ({
    opacity: 1,
    transition: { duration: 3, delay: 0.02 * delay[1] },
  }),
  closed: (delay: any) => ({
    opacity: 0,
    transition: { duration: 4, delay: 0.02 * delay[0] },
  }),
};

export default function VerticalPixelTransition({ menuIsActive }: { menuIsActive: boolean }) {
  const [windowSize, setWindowSize] = useState({ innerWidth: 0, innerHeight: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    };

    // Set initial window size
    handleResize();

    // Listen for window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shuffle = (a: any[]) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColum: number) => {
    const { innerWidth, innerHeight } = windowSize;

    // Ensure blockSize is valid and greater than 0
    const blockSize = innerHeight * 0.1;
    if (!blockSize || blockSize <= 0 || !innerWidth) return [];

    // Calculate number of blocks and ensure it's valid
    const nbOfBlocks = Math.ceil(innerWidth / blockSize);
    if (nbOfBlocks <= 0 || isNaN(nbOfBlocks)) return [];

    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        className="block" // Ensure you have this class in your CSS
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
        custom={[indexOfColum + randomIndex, 10 - indexOfColum + randomIndex]}
      />
    ));
  };

  return (
    <div style={{ flexDirection: "column" }} className="pixelBackground">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="row">
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
}
