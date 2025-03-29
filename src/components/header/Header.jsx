import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const dropdownRef = useRef(null); 

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdowns({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
    setDropdowns({});
  };

  const toggleDropdown = (nav) => {
    setDropdowns((prev) => {
      if (prev[nav]) {
        return { ...prev, [nav]: false }; 
      }
      return { ...prev, [nav]: true };
    });
  };

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
    <header className="bg-white sm:py-8 py-4 sticky top-0 z-50">
      <div className="max-w-[80.87rem] mx-auto px-4 w-full flex justify-between items-center">
        <a href="/" className="max-h-48">
          <img
            src="/assets/svg/logo.svg"
            alt=""
            className="w-full h-8 object-cover"
          />
        </a>

        <ul className="lg:flex xl:gap-6 gap-4 hidden items-center">
          {navItems.map((nav) => (
            <li
              key={nav}
              className="relative flex items-center gap-3"
              ref={dropdownRef}
            >
              <a
                href="/"
                className="font-semibold text-sm text-secondary hover:text-primary hover:font-black cursor-pointer"
                onClick={(e) => {
                  if (nav !== "Home") {
                    e.preventDefault();
                    toggleDropdown(nav);
                  }
                }}
              >
                {nav}
              </a>
              {nav !== "Home" && (
                <img
                  src="/assets/svg/dropdown.svg"
                  className={`h-1.5 w-2.5 cursor-pointer transition-transform ${
                    dropdowns[nav] ? "rotate-180" : "rotate-0"
                  }`}
                  alt="Dropdown"
                  onClick={() => toggleDropdown(nav)}
                />
              )}
              {nav !== "Home" && dropdowns[nav] && (
                <ul className="absolute top-10 left-0 mt-2 bg-white shadow-lg rounded-md text-black w-40 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button className="xl:px-6 px-4 py-2.5 rounded-full xl:text-base text-sm max-lg:hidden bg-green-200 text-white text-center border border-green-200 hover:bg-white hover:border-green-200 hover:text-green-200">
          541-484-1200
        </button>

        <button
          onClick={handleMenu}
          className="lg:hidden h-10 w-10 rounded-full flex justify-center items-center"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>

        {open && (
          <div className="absolute top-0 w-full bg-black p-10 left-0 z-50">
            <button
              onClick={closeMenu}
              className="absolute top-10 right-10 text-red-600"
            >
              X
            </button>
            <ul className="flex text-white h-[100svh] gap-6 flex-col justify-center items-center">
              {navItems.map((nav) => (
                <li
                  key={nav}
                  className="relative flex items-center gap-3"
                  ref={dropdownRef}
                >
                  <a
                    href="/"
                    className="font-semibold text-xl hover:text-primary hover:font-black cursor-pointer"
                    onClick={(e) => {
                      if (nav !== "Home") {
                        e.preventDefault();
                        toggleDropdown(nav);
                      }
                    }}
                  >
                    {nav}
                  </a>
                  {nav !== "Home" && (
                    <img
                      src="/assets/svg/dropdown.svg"
                      className={`h-1.5 w-2.5 cursor-pointer transition-transform ${
                        dropdowns[nav] ? "rotate-180" : "rotate-0"
                      }`}
                      alt="Dropdown"
                      onClick={() => toggleDropdown(nav)}
                    />
                  )}
                  {nav !== "Home" && dropdowns[nav] && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-black w-40 z-50">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 2
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Option 3
                      </li>
                    </ul>
                  )}
                </li>
              ))}
              <button className="px-6 py-2.5 rounded-full sm:text-base text-sm bg-green-200 text-white text-center border border-green-200 hover:bg-white hover:border-green-200 hover:text-green-200">
                541-484-1200
              </button>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
