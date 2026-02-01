import { useContext } from "react";
import { motion } from "motion/react";
import localization from "../localization.json";
import { langContext } from "../App";

import mailLogo from "../assets/icons/mail.png";
import linkedLogo from "../assets/icons/linkedin.png";
import phoneLogo from "../assets/icons/phone.png";

export default function Contacts() {
  const language = useContext(langContext);
  const contacts =
    localization[language.lang].Contacts ?? localization.LT.Contacts;

  return (
    <motion.div
      className="ContactContainer"
      id="Contacts"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <h1>{contacts.Heading}</h1>
      <div className="Contacts">
        <motion.a whileHover={{ scale: 1.1 }} href={"mailto:" + contacts.Email}>
          <img src={mailLogo} alt="mail" />
          <p>{contacts.Email}</p>
        </motion.a>

        <motion.a whileHover={{ scale: 1.1 }} href={"tel:" + contacts.Phone}>
          <img src={phoneLogo} alt="phone" />
          <p>{contacts.Phone}</p>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/pauliussav/"
          target="_blank"
        >
          <img src={linkedLogo} alt="linkedIn" />
        </motion.a>
      </div>
      <div className="Footer">© 2026 Paulius Savičiūnas</div>
    </motion.div>
  );
}
