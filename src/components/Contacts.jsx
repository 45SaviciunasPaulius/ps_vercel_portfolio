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
      className="bg-secondary/35 grid grid-row-2 grid-col-1 justify-center text-center"
      id="Contacts"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <h1 className="text-heading my-4 font-bold text-xl">
        {contacts.Heading}
      </h1>
      <div className="flex flex-wrap gap-10 mt-4 justify-center items-center">
        <motion.a
          className="bg-primary w-30 h-30 flex flex-col justify-center items-center rounded-xl"
          whileHover={{ scale: 1.1 }}
          href={"mailto:" + contacts.Email}
        >
          <img className="w-12 flex self-center" src={mailLogo} alt="mail" />
          <p className="text-[13px]">{contacts.Email}</p>
        </motion.a>

        <motion.a
          className="bg-primary w-30 h-30 flex flex-col justify-center items-center rounded-xl"
          whileHover={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/pauliussav/"
          target="_blank"
        >
          <img
            className="w-12 flex self-center"
            src={linkedLogo}
            alt="linkedIn"
          />
        </motion.a>
      </div>
      <div className="my-6">© 2026 Paulius Savičiūnas</div>
    </motion.div>
  );
}
