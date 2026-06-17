import { useContext, useEffect, useState } from "react";
import localization from "../localization.json";
import { langContext } from "../App";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

import CloseIcon from "../assets/icons/close.png";
import MenuIcon from "../assets/icons/menu.png";

export default function NavBar({ children }) {
  const language = useContext(langContext);
  const menu = localization[language.lang].menu ?? localization.LT.menu;

  const [open, setOpen] = useState(false);

  function ScrollToContacts() {
    document.getElementById("Contacts").scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToProjects() {
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToTop() {
    document.getElementById("Top").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="z-1000 fixed top-0 w-full shadow-lg bg-secondary/35 ">
      <AnimatePresence>
        {open && (
          <motion.ul
            className="flex flex-col w-62.5 fixed bg-secondary/35 top-0 right-0 h-full justify-start backdrop-blur-sm z-1"
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 250, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <li className="w-full h-15">
              <button
                className="w-full h-15"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img className="w-13 px-3" src={CloseIcon} alt="menu" />
              </button>
            </li>
            <li className="w-full h-15">
              <Link
                to="/"
                className="w-full h-15 flex justify-center items-center"
                onClick={ScrollToTop}
              >
                {menu.aboutMe}
              </Link>
            </li>
            <li className="w-full h-15">
              <Link
                to="/"
                className="w-full h-15 flex justify-center items-center"
                onClick={ScrollToProjects}
              >
                {menu.projects}
              </Link>
            </li>
            <li className="w-full h-15">
              <Link
                to="/"
                className="w-full h-15 flex justify-center items-center"
                onClick={ScrollToContacts}
              >
                {menu.contacts}
              </Link>
            </li>
            <li className="mt-4 self-center">{children}</li>
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="flex flex-row h-16 justify-end items-center backdrop-blur-sm">
        <li className="mr-auto px-3 ">
          <Link
            to="/"
            className="w-full h-15 cursor-pointer"
            onClick={ScrollToTop}
          >
            Paulius Savičiūnas
          </Link>
        </li>
        <li className="hidden lg:block h-full">
          <Link
            to="/"
            className="w-full px-7 h-full cursor-pointer flex items-center"
            onClick={ScrollToTop}
          >
            {menu.aboutMe}
          </Link>
        </li>
        <li className="hidden lg:block h-full">
          <Link
            to="/"
            className="w-full px-7 h-full cursor-pointer flex items-center"
            onClick={ScrollToProjects}
          >
            {menu.projects}
          </Link>
        </li>
        <li className="hidden lg:block h-full">
          <Link
            to="/"
            className="w-full px-7 h-full cursor-pointer flex items-center"
            onClick={ScrollToContacts}
          >
            {menu.contacts}
          </Link>
        </li>
        <li className="hidden lg:block mx-2">{children}</li>
        <li className="block lg:hidden ">
          <button onClick={() => setOpen(true)}>
            <img className="w-8" src={MenuIcon} alt="menu" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

const MotionLink = ({ children, ...props }) => (
  <motion.button
    className="cursor-pointer"
    whileHover={{ backgroundColor: "rgba(8, 77, 99,0.2)" }}
    transition={{ duration: 0.2, ease: "easeIn" }}
    {...props}
  >
    {children}
  </motion.button>
);
