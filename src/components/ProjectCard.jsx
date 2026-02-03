import githubLogo from "../assets/icons/github.webp";
import { motion } from "motion/react";

export default function ProjectCard({
  children,
  firstPhoto,
  title,
  date,
  about,
  repoLink,
  ...rest
}) {
  return (
    <motion.div
      className="projectCard"
      {...rest}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      whileHover={{ scale: 1.05 }}
    >
      <img className="firstPhoto" src={firstPhoto} alt="project photo" />
      <div className="ProjectInfo">
        <h1>{title}</h1>
        <p className="date">{date}</p>
        <p className="aboutProject">{about}</p>
        <div className="projectStack">{children}</div>
        <a
          target="_blank"
          className="repoLink"
          href={repoLink}
          onClick={(e) => e.stopPropagation()}
        >
          GitHub Repo:
          <img src={githubLogo} alt="GitHub" />
        </a>
      </div>
    </motion.div>
  );
}
