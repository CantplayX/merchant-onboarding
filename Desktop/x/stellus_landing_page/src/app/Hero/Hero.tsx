"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css"; // Only if you are using some custom styles

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, delay: 1 }
      );
    }
  }, []);

  return (
    <>
      <div className="max-container padding-container relative ">
        <div ref={heroRef} className="grid-bg">
          <div className="text-grid">
            <h1 className="text-ub-xl font-semibold mb-2">
              Revolutionize Payments with StellusAI
            </h1>
            <p className="gap-2 mb-7">
              Harness the power of AI to transform your payment experience. Our
              cutting-edge technology ensures secure, seamless, and fast
              transactions, enabling businesses to scale effortlessly.
            </p>

            <div className="flex justify-center items-center gap-5"></div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 pt-20">
              <div className="flex flex-col justify-start items-center gap-2 p-3 px-5 bg-inherit border border-green-200 rounded-s-md">
                <p className="flex flex-col justify-start items-center">
                  <span className="text-ub-lg font-bold">200+</span>
                  Businesses by StellusAI
                </p>
              </div>
              <div className="flex flex-col justify-start items-center gap-2 p-3 px-5 bg-inherit border border-green-200 rounded-s-md">
                <p className="flex flex-col justify-start items-center">
                  <span className="text-ub-lg font-bold">10k+</span>
                  Transactions processed daily
                </p>
              </div>
              <div className="flex flex-col justify-start items-center gap-2 p-3 px-5 bg-inherit border border-green-200 rounded-s-md">
                <p className="flex flex-col justify-start items-center">
                  <span className="text-ub-lg font-bold">16+</span>
                  Years of industry-leading payment solutions
                </p>
              </div>
            </div>
          </div>
          <div className="hero-col-img"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
