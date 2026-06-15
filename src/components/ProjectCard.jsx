import githubLogo from "../assets/icons/github.webp";
import { motion } from "motion/react";

export default function ProjectCard({
  children,
  firstPhoto,
  title,
  comment,
  grade,
  date,
  about,
  repoLink,
  className,
  ...rest
}) {
  return (
    <motion.div
      className={`flex w-full flex-col my-3 bg-[#1c191740] rounded-xl gap-4 md:flex-row lg:w-[70%] max-w-300 md:h-80 shadow-lg cursor-pointer overflow-hidden ${className || ""}`}
      {...rest}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="md:aspect-square md:max-w-70">
        <img
          className="md:w-full md:h-full md:object-cover"
          src={firstPhoto}
          alt="project photo"
        />
      </div>
      <div className="w-full grid grid-col-1 grid-row-5 py-3">
        <h1 className="text-center text-heading font-bold mt-2 md:text-left">
          {title} <span className="text-subtitle text-sm">{comment}</span>
        </h1>
        <p className="text-cyan-100 text-center md:text-left font-bold my-2">
          {grade}
        </p>
        <p className="text-subtitle text-center md:text-left">{date}</p>
        <p className="p-4 text-center md:text-left md:px-0">{about}</p>
        <div className="flex flex-wrap [&_img]:object-cover [&_img]:overflow-visible justify-center gap-3 p-3 [&_img]:max-w-11 md:justify-start md:px-0 ">
          {children}
        </div>

        {repoLink && (
          <a
            target="_blank"
            className="flex items-center self-end z-999 justify-self-end mx-3"
            href={repoLink}
            onClick={(e) => e.stopPropagation()}
          >
            GitHub Repo:
            <img className="max-w-15" src={githubLogo} alt="GitHub" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
