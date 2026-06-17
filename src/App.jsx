import { createContext, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import CarmaPool from "./Pages/CarmaPool";

// Flags
import lithuanianFlag from "./assets/flags/LT.webp";
import unitedKingdomFlag from "./assets/flags/UK.webp";

export const langContext = createContext();

function Layout() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "LT");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  function changeLang() {
    if (lang === "LT") {
      setLang("EN");
    } else {
      setLang("LT");
    }
  }

  return (
    <langContext.Provider value={{ lang, setLang }}>
      <NavBar>
        <button className="w-8 flex cursor-pointer" onClick={changeLang}>
          <img
            src={lang === "LT" ? lithuanianFlag : unitedKingdomFlag}
            alt="Language Button"
          />
        </button>
      </NavBar>
      <Outlet />
    </langContext.Provider>
  );
}

function ShowHome() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contacts />
    </>
  );
}

function ShowCarmaPool() {
  return <CarmaPool />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<ShowHome />} />
          <Route path="/carmapool" element={<ShowCarmaPool />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
