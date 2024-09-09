import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: 0.03 * i },
  }),
  closed: (i) => ({
    opacity: 0,
    transition: { duration: 0.5, delay: 0.03 * i },
  }),
};

export default function CenterPixelTransition({ menuIsActive }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05; // Block size based on viewport width
    const nbOfBlocksX = Math.ceil(innerWidth / blockSize);
    const nbOfBlocksY = Math.ceil(innerHeight / blockSize);

    const tempBlocks = [];
    for (let y = 0; y < nbOfBlocksY; y++) {
      for (let x = 0; x < nbOfBlocksX; x++) {
        tempBlocks.push({ x, y });
      }
    }
    setBlocks(tempBlocks);
  }, []);

  return (
    <div className="pixelBackground">
      {blocks.map((block, index) => (
        <motion.div
          key={index}
          className="block"
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "closed"}
          custom={index}
          style={{
            left: `${block.x * 5}vw`,
            top: `${block.y * 5}vw`,
            width: '5vw',
            height: '5vw',
          }}
        />
      ))}
    </div>
  );
}
