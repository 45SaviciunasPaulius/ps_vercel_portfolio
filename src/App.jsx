import { createContext, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

// Flags
import lithuanianFlag from "./assets/flags/LT.webp";
import unitedKingdomFlag from "./assets/flags/UK.webp";

export const langContext = createContext();

export default function App() {
  const [lang, setLang] = useState("LT");

  function changeLang() {
    if (lang === "LT") setLang("EN");
    else setLang("LT");
  }
  return (
    <langContext.Provider value={{ lang, setLang }}>
      <NavBar>
        <button className="langButton" onClick={changeLang}>
          {lang === "LT" ? (
            <img src={lithuanianFlag} alt="Lithuanian" />
          ) : (
            <img src={unitedKingdomFlag} alt="English" />
          )}
        </button>
      </NavBar>

      <HeroSection />
      <AboutMe />
      <Projects />
      <Contacts />
    </langContext.Provider>
  );
}
