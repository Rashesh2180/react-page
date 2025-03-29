import React from "react";
import Button from "../button/Button";

const Footer = () => {
  const navItems = [
    "Home",
    "Services",
    "Locations",
    "Cost",
    "Tools",
    "Blog",
    "About",
    "Contact",
  ];
  return (
    <footer className="custom-shadow py-10">
      <footer className="max-w-[76.063rem] mx-auto px-4  bg-white  ">
        <div className="flex xl:gap-40 gap-10 flex-wrap items-center mb-12">
          <img src="/assets/svg/logo.svg" alt="" className="h-8 w-52" />
          <p className="text-base font-semibold leading-5 text-secondary">
            590 Pearl St., Suite # 232, Eugene, OR 97401 | 541-484-1200
          </p>
        </div>
        <p className="text-base font-medium leading-6 text-secondary text-center mb-12">
          DISCLAIMER. The information provided on this web site is for
          information purposes only and should not under any circumstance be
          considered legal advice. If you are seeking legal advice, please
          contact an attorney. Mediation Northwest encourages its clients to
          seek independent legal advice at any stage of the mediation process.
          Furthermore, reviewing this website does not establish an
          attorney-client relationship. Please do not send an email to Mediation
          Northwest with any confidential information. Mediation Northwest does
          not practice law outside of Oregon and is not soliciting clients from
          outside Oregon.
        </p>
        <div className="border mb-12 rounded-full max-w-96 mx-auto flex items-center  border-secondary gap-5 py-3 px-4">
          <input
            type="text"
            className="flex-1 border-none outline-none h-full w-full"
            placeholder="Enter your Email here..."
          />
          <Button
            text="Subscribe"
            bgColor="primary"
            textColor="white"
            hoverBgColor="white"
            borderColor="primary"
            hoverTextColor="primary"
            borderWidth="primary"
          />
        </div>
        <ul className="flex flex-wrap xl:gap-6 gap-4 mb-12 items-center justify-center">
          {navItems.map((nav) => (
            <li key={nav} className="relative flex items-center gap-3">
              <a
                href="/"
                className="font-semibold hover:tracking-widest text-sm text-secondary hover:text-primary hover:font-black cursor-pointer 
             transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                {nav}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center leading-5 text-base text-secondary font-semibold">
          © 2025 Mediation Northwest |. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
