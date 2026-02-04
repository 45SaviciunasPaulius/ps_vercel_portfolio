import { useContext } from "react";
import { motion } from "motion/react";
import localization from "../localization.json";
import { langContext } from "../App";
import Card from "./Card";
import OtherInfo from "./OtherInfo";
// Icons

import cssLogo from "../assets/stack/css-3.png";
import htmlLogo from "../assets/stack/html.png";
import jsLogo from "../assets/stack/js.png";
import mySqlLogo from "../assets/stack/mysql.png";
import phpLogo from "../assets/stack/php.png";
import reactLogo from "../assets/stack/react.png";
import xamppLogo from "../assets/stack/xampp.png";
import bootstrapLogo from "../assets/stack/bootstrap.png";

const stack = [
  ["HTML", htmlLogo],
  ["CSS", cssLogo],
  ["JavaScript", jsLogo],
  ["MySQL", mySqlLogo],
  ["PHP", phpLogo],
  ["React", reactLogo],
  ["XAMPP", xamppLogo],
  ["Bootstrap", bootstrapLogo],
];

import selfImprovement from "../assets/icons/self_improvement.png";
import handshake from "../assets/icons/handshake.png";
import lightbulb from "../assets/icons/lightbulb.png";

export default function AboutMe() {
  const language = useContext(langContext);
  const aboutMe =
    localization[language.lang].aboutMe ?? localization.LT.aboutMe;

  const otherInfo =
    localization[language.lang].otherInfo ?? localization.LT.otherInfo;

  return (
    <motion.div
      className="aboutMe"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="cards">
        <Card
          icon={selfImprovement}
          heading={aboutMe.info_1}
          info={aboutMe.info_1}
        />

        <Card icon={handshake} heading={aboutMe.info_2} info={aboutMe.info_2} />

        <Card icon={lightbulb} heading={aboutMe.info_3} info={aboutMe.info_3} />
      </div>
      <h1 className="heading">{aboutMe.heading}</h1>

      <motion.div
        className="mt-10 m-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-25">
          {stack.map((item) => (
            <motion.li
              key={item}
              className="flex flex-col-reverse items-center gap-2"
              whileHover={{ y: 10 }}
            >
              {item[0]}
              <img className="max-w-20" src={item[1]} alt={item[0]} />
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="OtherInfoAll">
        <div className="OtherInfo">
          <h1>{otherInfo.type_1}</h1>
          <ul>
            <OtherInfo
              name={otherInfo.Education.HighSchool.name}
              title={otherInfo.Education.HighSchool.degree}
              year={otherInfo.Education.HighSchool.year}
            />
            <OtherInfo
              name={otherInfo.Education.College.name}
              title={otherInfo.Education.College.degree}
              year={otherInfo.Education.College.year}
            />
          </ul>
        </div>

        <div className="OtherInfo_2">
          <ul>
            <OtherInfo
              name={otherInfo.Exp.Job1.name}
              title={otherInfo.Exp.Job1.degree}
              year={otherInfo.Exp.Job1.year}
            />
            <OtherInfo
              name={otherInfo.Exp.Job2.name}
              title={otherInfo.Exp.Job2.degree}
              year={otherInfo.Exp.Job2.year}
            />
            <OtherInfo
              name={otherInfo.Exp.Job3.name}
              title={otherInfo.Exp.Job3.degree}
              year={otherInfo.Exp.Job3.year}
            />
          </ul>
          <h1>{otherInfo.type_2}</h1>
        </div>
      </div>
    </motion.div>
  );
}
