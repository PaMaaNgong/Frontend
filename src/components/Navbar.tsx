import React, { useState } from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import profileIcon from './icon/image 4.png';
import reviewIcon from './icon/image 5.png';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "All",
      link: "#"
    },
    {
      label: "Mejor Elective",
      link: "#"
    },
    {
      label: "General Education",
      link: "#"
    },
    {
      label: "Free Elective",
      link: "#"
    }
  ];

  return (
    <main>
      <nav className={clsx("flex justify-between px-8 items-center py-2 -mt-120 -mb-120 bg-#9B2226")}>
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <a href="/" className="text-3xl font-mono">
              FreeCPE
            </a>
          </section>
          {navlinks.map((link, index) => (
            <a
              key={index}
              className="hidden lg:block text-gray-400 hover:text-black"
              href={link.link}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((link, index) => (
              <a key={index} className="font-bold" href={link.link}>
                {link.label}
              </a>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-3">
          {/* Review icon link */}
          <a href="/review" className="text-3xl">
            <img src={reviewIcon} alt="Review Icon" className="w-25 h-8" />
          </a>
          {/* Profile icon link */}
          <a href="/profile" className="text-3xl">
            <img src={profileIcon} alt="Profile Icon" className="w-15 h-8" />
          </a>
        </section>
      </nav>
      <hr className="" />
    </main>
  );
};

export default Navbar;
