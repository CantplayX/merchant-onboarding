"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./styles.css";
import Image from "next/image";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <Image src="/cta3.png" width={450} height={450} alt="cta1" />
          </div>
          <div className="scroll-section">
            <Image src="/cta2.jpeg" width={450} height={450} alt="cta1" />
          </div>
          <div className="scroll-section">
            <Image src="/cta1.jpeg" width={450} height={450} alt="cta1" />
          </div>
          <div className="scroll-section">
            <Image src="/cta2.jpeg" width={450} height={450} alt="cta1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
