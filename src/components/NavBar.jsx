import { useContext, useEffect, useState } from "react";
import localization from "../localization.json";
import { langContext } from "../App";
import { AnimatePresence, motion } from "motion/react";

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
    <nav className="z-1000 bg-secondary fixed top-0 w-full">
      <AnimatePresence>
        {open && (
          <motion.ul
            className="flex flex-col w-62.5 fixed bg-secondary top-0 right-0 h-full justify-start"
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
              <MotionLink className="w-full h-15" onClick={ScrollToTop}>
                {menu.aboutMe}
              </MotionLink>
            </li>
            <li className="w-full h-15">
              <MotionLink className="w-full h-15" onClick={ScrollToProjects}>
                {menu.projects}
              </MotionLink>
            </li>
            <li className="w-full h-15">
              <MotionLink className="w-full h-15" onClick={ScrollToContacts}>
                {menu.contacts}
              </MotionLink>
            </li>
            <li className="mt-4 self-center">{children}</li>
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="flex flex-row h-16 justify-end gap-5 items-center mx-4">
        <li className="mr-auto px-3">
          <button className="w-full h-15" onClick={ScrollToTop}>
            Paulius Savičiūnas
          </button>
        </li>
        <li className="hidden lg:block hover:bg-primary px-3 h-full">
          <MotionLink className="w-full h-15" onClick={ScrollToTop}>
            {menu.aboutMe}
          </MotionLink>
        </li>
        <li className="hidden lg:block hover:bg-primary px-3 h-full">
          <MotionLink className="w-full h-15" onClick={ScrollToProjects}>
            {menu.projects}
          </MotionLink>
        </li>
        <li className="hidden lg:block hover:bg-primary px-3 h-full">
          <MotionLink className="w-full h-15" onClick={ScrollToContacts}>
            {menu.contacts}
          </MotionLink>
        </li>
        <li className="hidden lg:block">{children}</li>
        <li className="block lg:hidden">
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
    whileHover={{ backgroundColor: "rgba(12, 10, 9,0.5)" }}
    transition={{ duration: 0.2, ease: "easeIn" }}
    {...props}
  >
    {children}
  </motion.button>
);
