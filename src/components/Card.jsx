import { motion } from "motion/react";

export default function Card({ icon, heading, info, s }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <img src={icon} alt="icon" />
      <h1>{heading}</h1>
      <div className="circle1"> </div>
      <div className="circle2"> </div>
    </motion.div>
  );
}
