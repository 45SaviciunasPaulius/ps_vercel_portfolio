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
      <p className="text-neutral-500">{title}</p>
      <p className="text-neutral-500">{year}</p>
      <p>{desc}</p>
    </motion.li>
  );
}
