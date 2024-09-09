"use client";
import Image from "next/image";
import "./stylectacard.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <Image
                src={`/${src}`}
                alt="image"
                width={500}
                height={250}
                style={{ objectFit: "cover", borderRadius: "25px" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
