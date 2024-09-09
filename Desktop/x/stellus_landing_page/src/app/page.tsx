import Image from "next/image";
import Hero from "./Hero/Hero";

import ScrollSection from "./Scroll/Scroll";
import MainComing from "./Comingsoon/MainComing";
import Cta from "./Cta/Cta";
import WaitList from "./WaitList/WaitList";

export default function Home() {
  return (
    <>
      <Hero />

      <MainComing />
      <ScrollSection />
      <Cta />
      <WaitList />
    </>
  );
}
