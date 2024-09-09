import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay: any) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: 0.02 * delay[0] },
  }),
  closed: (delay: any) => ({
    opacity: 0,
    transition: { duration: 0.5, delay: 0.02 * delay[1] },
  }),
};

export default function HorizontalPixelTransition({ menuIsActive }: { menuIsActive: boolean }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerHeight * 0.1; // Block size based on viewport height
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
      {[...Array(20)].map((_, index) => (
        <div key={index} className="column">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              className="block"
              variants={anim}
              initial="initial"
              animate={menuIsActive ? "open" : "closed"}
              custom={[index, 20 - index]}
              style={{
                left: `${block.x * 10}vh`,
                top: `${block.y * 10}vh`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
