/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useEffect } from "react";
import styles from "./waitlist.module.css";
import Image from "next/image";
import Mail from "../../../public/mail.svg";
import Message from "../../../public/message.svg";

export default function Home() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <>
      <main className={styles.main}>
        <div ref={container} className={styles.container}>
          <div ref={stickyMask} className={styles.stickyMask}>
            <video autoPlay muted loop>
              <source src="/medias/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Join the Waitlist
          </h1>
          <p className="text-gray-600 mb-6">
            "At our company, we're dedicated to innovation and excellence. As
            the CEO, I'm thrilled to invite you to join our waitlist. By
            joining, you'll be among the first to experience our groundbreaking
            solutions. Thank you for your interest and support as we strive to
            make a difference in the industry."{" "}
            <span className="italic text-green-400">Stellus CEO</span>
          </p>

          <form action="#" method="post" className="space-y-4">
            <div className="flex justify-between items-center gap-4 lg:gap-24  p-4 my-4 rounded-lg  ">
              <div className="flex justify-start gap-3  items-center ">
                <Image src={Mail} alt="mail" />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-inherit rounded-md border border-grey-8 px-3 py-2"
                />
              </div>

              <div>
                <Image src={Message} alt="message" />
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
