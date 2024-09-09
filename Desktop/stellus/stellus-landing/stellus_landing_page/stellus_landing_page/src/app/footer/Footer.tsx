import Logo from "../../../public/stelluslogo.jpg";
import Image from "next/image";
import Mail from "../../../public/mail.svg";
import Message from "../../../public/message.svg";
import {
  FOOTERS_ABOUT,
  FOOTERS_HOME,
  FOOTERS_TOKENOMICS,
  FOOTERS_SERVICE,
  FOOTERS_CONTACT_US,
  SOCIALS,
} from "../../../constance/constace";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="max-container padding-container ">
        <div className="flex flex-col lg:flex-row justify-between items-center">


        </div>

        <div className="flex flex-col lg:flex-row justify-around lg:justify-between items-center gap-10 py-8 bg-grey-8 p-12 rounded-md ">
          <div className="flex flex-row items-center gap-10">
            <h3>&copy; {new Date().getFullYear()}</h3>
            <h3>All Rights Reserved</h3>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex gap-4">
          <h3 className="text-grey-15 hover:text-grey-60 text-ub-base">
                Home
              </h3>
          <h3 className="text-grey-15 hover:text-grey-60 text-ub-base">
                Tokenomics
              </h3>
          <h3 className="text-grey-15 hover:text-grey-60 text-ub-base">
                Service
            </h3>
            <h3 className="text-grey-15 hover:text-grey-60 text-ub-base">
                Contact Us
              </h3>
          </div>
          <div className="flex flex-row items-center gap-6 ">
            {SOCIALS.map((social) => (
              <div key={social.label}>
                <Image
                  src={social.src}
                  alt={social.label}
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
