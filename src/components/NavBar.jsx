import { useContext } from "react";
import localization from "../localization.json";
import { langContext } from "../App";
import { motion } from "motion/react";

import CloseIcon from "../assets/icons/close.png";
import MenuIcon from "../assets/icons/menu.png";

export default function NavBar({ children }) {
  const language = useContext(langContext);
  const menu = localization[language.lang].menu ?? localization.LT.menu;

  function openSideBar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "flex";
  }

  function closeSideBar(e) {
    e.preventDefault();
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "none";
  }

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
      <ul className="sidebar">
        <li>
          <button onClick={closeSideBar}>
            <img src={CloseIcon} alt="menu" />
          </button>
        </li>
        <li>
          <MotionLink onClick={ScrollToTop}>{menu.aboutMe}</MotionLink>
        </li>
        <li>
          <MotionLink onClick={ScrollToProjects}>{menu.projects}</MotionLink>
        </li>
        <li>
          <MotionLink onClick={ScrollToContacts}>{menu.contacts}</MotionLink>
        </li>
        <li>{children}</li>
      </ul>

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
          <button onClick={openSideBar}>
            <img src={MenuIcon} alt="menu" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

const MotionLink = ({ children, ...props }) => (
  <motion.button
    whileHover={{ backgroundColor: "rgba(242, 255, 0, 0.15)" }}
    transition={{ duration: 0.2, ease: "easeIn" }}
    {...props}
  >
    {children}
  </motion.button>
);
