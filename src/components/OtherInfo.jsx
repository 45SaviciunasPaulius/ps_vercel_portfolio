import { useContext } from "react";
import { motion } from "motion/react";
import localization from "../localization.json";
import { langContext } from "../App";

export default function OtherInfo({ name, title, year, desc }) {
  const language = useContext(langContext);
  const otherInfo =
    localization[language.lang].otherInfo ?? localization.LT.otherInfo;

  return (
    <motion.li initial={{ x: -40 }} whileInView={{ x: 0 }}>
      <h2>{name}</h2>
      <p className="text-subtitle">{title}</p>
      <p className="text-subtitle">{year}</p>
      <p>{desc}</p>
    </motion.li>
  );
}
