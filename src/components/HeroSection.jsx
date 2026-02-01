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
      className="HeroSection"
      id="Top"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src={Paulius} alt="Paulius" />
      <div>
        <h1 className="heading">{heroSection.name}</h1>
        <p className="heroInfo" style={{ color: "gray" }}>
          {heroSection.info}
        </p>
        <p className="heroBio"> {heroSection.bio}</p>
      </div>
    </motion.div>
  );
}
