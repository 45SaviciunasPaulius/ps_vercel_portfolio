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
    <nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="sidebar"
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 250, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src={CloseIcon} alt="menu" />
              </button>
            </li>
            <li>
              <MotionLink onClick={ScrollToTop}>{menu.aboutMe}</MotionLink>
            </li>
            <li>
              <MotionLink onClick={ScrollToProjects}>
                {menu.projects}
              </MotionLink>
            </li>
            <li>
              <MotionLink onClick={ScrollToContacts}>
                {menu.contacts}
              </MotionLink>
            </li>
            <li>{children}</li>
          </motion.ul>
        )}
      </AnimatePresence>

      <ul>
        <li>
          <button onClick={ScrollToTop}>Paulius Savičiūnas</button>
        </li>
        <li className="hideOnMobile">
          <MotionLink onClick={ScrollToTop}>{menu.aboutMe}</MotionLink>
        </li>
        <li className="hideOnMobile">
          <MotionLink onClick={ScrollToProjects}>{menu.projects}</MotionLink>
        </li>
        <li className="hideOnMobile">
          <MotionLink onClick={ScrollToContacts}>{menu.contacts}</MotionLink>
        </li>
        <li className="hideOnMobile">{children}</li>
        <li className="showOnMobile hideOnDesktop">
          <button onClick={() => setOpen(true)}>
            <img src={MenuIcon} alt="menu" />
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
