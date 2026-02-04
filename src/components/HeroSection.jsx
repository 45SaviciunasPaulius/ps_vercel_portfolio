import Paulius from "../assets/Paulius.webp";
import localization from "../localization.json";
import { langContext } from "../App";
import { useContext } from "react";
import { motion } from "motion/react";

export default function HeroSection() {
  const language = useContext(langContext);
  const heroSection =
    localization[language.lang].heroSection ?? localization.LT.heroSection;

  return (
    <motion.div
      className="m-auto flex flex-col justify-center items-center mt-40 mb-25 w-full lg:flex-row"
      id="Top"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        className="w-full lg:w-[50%] max-w-125"
        src={Paulius}
        alt="Paulius"
        fetchPriority="high"
      />
      <div className="lg:w-auto">
        <h1 className="mx-5 text-heading font-medium text-3xl mt-3 lg:text-left lg:mx-20">
          {heroSection.name}
        </h1>
        <p className="mx-5 text-neutral-400 mt-2 lg:max-w-110 text-justify lg:mx-20">
          {heroSection.info}
        </p>
        <p className="mx-5 mt-8 max-w-110 text-justify lg:text-pretty lg:mx-20 text-md">
          {heroSection.bio}
        </p>
      </div>
    </motion.div>
  );
}
