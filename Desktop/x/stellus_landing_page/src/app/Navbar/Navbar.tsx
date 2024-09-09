import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/stelluslogo2.png";
import { NAV_LINKS } from "../../../constance/constace";
import './style.css'

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0, x: -100,  },
        { opacity: 1, x: 0, duration: 2,delay: 1.5 }
      );
    }
  }, []);

  return (
    <>
      <div className="max-container padding-container bg- mb-12 navbarr">
        <div
          ref={navbarRef}
          className="bg-transparent max-container padding-container flex justify-between items-center p-5"
        >
          <div>
            <Image src='/stellushigh1.svg' alt="page_logo" width={210} height={20} />
          </div>

          <div className="p-2 border-2 border-green-400 rounded-3xl">
            <div className="flex ">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="text-ub-base text-grey-30 px-3 py-1.5 cursor-pointer transition-all hover:text-green-200 hover:font-bold "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <select
              name=""
              id=""
              className="bg-inherit p-2 border-2 border-green-400 rounded-xl"
            >
              <option className="bg-inherit" value="english" selected>
                EN
              </option>
              <option value="french">FR</option>
              <option value="spanish">SP</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
