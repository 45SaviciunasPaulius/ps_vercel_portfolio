import { motion } from "motion/react";

export default function Card({ icon, heading, info, s }) {
  return (
    <motion.div
      className="shadow-lg/20 shadow- shadow-black bg-[#1c191740] w-70 h-43 overflow-hidden rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <img className="m-2 flex w-12" src={icon} alt="icon" />
      <h1 className="text-heading w-[80%] text-left px-4 mt-2">{heading}</h1>
      <div className=" bg-[#543c3035] w-35 h-35 rounded-full ml-auto relative -top-25 left-22"></div>
      <div className=" bg-[#543c3035] w-35 h-35 rounded-full ml-auto relative -top-42 left-5"></div>
    </motion.div>
  );
}
