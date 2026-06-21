import localization from "../localization.json";
import { langContext } from "../App";
import { useContext, useState, useEffect } from "react";
import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

// Icons

import cssLogo from "../assets/stack/css-3.png";
import htmlLogo from "../assets/stack/html.png";
import jsLogo from "../assets/stack/js.png";
import mySqlLogo from "../assets/stack/mysql.png";
import phpLogo from "../assets/stack/php.png";
import reactLogo from "../assets/stack/react.png";
import xamppLogo from "../assets/stack/xampp.png";
import appwriteLogo from "../assets/stack/appwrite.png";
import bootstrapLogo from "../assets/stack/bootstrap.png";
import laravelLogo from "../assets/stack/laravel.png";
import tailwindLogo from "../assets/stack/tailwind.png";
import inertiaLogo from "../assets/stack/inertia.png";
import cloudflareLogo from "../assets/stack/cloudflare.png";
import filamentLogo from "../assets/stack/filament.png";
import leafletLogo from "../assets/stack/leaflet.png";
import railwayLogo from "../assets/stack/railway.png";
import resendLogo from "../assets/stack/resend.png";
import gitLogo from "../assets/stack/git.png";
import githubLogo from "../assets/stack/github.png";

import checkmark from "../assets/icons/check.png";

// Images

import image_0 from "../assets/projects/Carmapool/0.webp";
import image_1 from "../assets/projects/Carmapool/1.webp";
import image_2 from "../assets/projects/Carmapool/2.webp";
import image_3 from "../assets/projects/Carmapool/3.webp";
import image_4 from "../assets/projects/Carmapool/4.webp";
import image_5 from "../assets/projects/Carmapool/5.webp";
import image_6 from "../assets/projects/Carmapool/6.webp";
import image_7 from "../assets/projects/Carmapool/7.webp";
import image_8 from "../assets/projects/Carmapool/8.webp";
import image_9 from "../assets/projects/Carmapool/9.webp";
import image_10 from "../assets/projects/Carmapool/10.webp";
import image_11 from "../assets/projects/Carmapool/11.webp";
import image_12 from "../assets/projects/Carmapool/12.webp";
import image_13 from "../assets/projects/Carmapool/13.webp";
import image_14 from "../assets/projects/Carmapool/14.webp";
import image_15 from "../assets/projects/Carmapool/15.webp";
import image_16 from "../assets/projects/Carmapool/16.webp";
import Contacts from "../components/Contacts";

export default function CarmaPool() {
  const language = useContext(langContext);
  const projects =
    localization[language.lang].projects.project_4_detailed ??
    localization.LT.projects.project_4_detailed;

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const toggleOpen = (state) => setOpen(state);

  const updateIndex =
    (when) =>
    ({ index: current }) => {
      if (when === open) {
        setIndex(current);
      }
    };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { src: image_0 },
    { src: image_2 },
    { src: image_3 },
    { src: image_4 },
    { src: image_5 },
    { src: image_6 },
    { src: image_7 },
    { src: image_8 },
    { src: image_9 },
    { src: image_10 },
    { src: image_11 },
    { src: image_12 },
    { src: image_13 },
    { src: image_14 },
    { src: image_15 },
    { src: image_16 },
  ];
  return (
    <>
      <div className=" py-20 md:px-20 m-auto max-w-350">
        <div>
          <h1>{projects.intro}</h1>
          <h2 className="font-bold text-6xl pb-10 pt-2 border-b-3 max-w-fit border-cyan-400">
            {projects.title}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 mt-6 gap-1">
            <div>
              <div className="flex items-center gap-2 pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
                {projects.date}
              </div>
              <div className="flex items-center gap-2 pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M657-121 544-234l56-56 57 57 127-127 56 56-183 183Zm-537 1v-80h360v80H120Zm0-160v-80h360v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z" />
                </svg>
                {projects.grade}
              </div>
            </div>

            <div className="grid md:grid-rows-2 text-center gap-2">
              <a
                href="https://carmapool.saviciunas.lt"
                target="_blank"
                className="flex items-center justify-center gap-2 border border-cyan-400 px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg
  transition duration-200 ease-in-out hover:shadow-lg hover:shadow-cyan-400/30 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                </svg>
                {projects.button}
              </a>

              <a
                href="https://github.com/45SaviciunasPaulius/CarmaPool"
                target="_blank"
                className="flex items-center justify-center gap-2 border border-slate-400 px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg
  transition duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-400/30 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 p-10 bg-slate-700/40 rounded-xl border-l-4 border-cyan-400">
          <div className="mb-10 text-justify text-slate-400 ">
            {projects.about}
          </div>
          <ol
            className="list-decimal"
            style={{ listStyleImage: `url(${checkmark})` }}
          >
            {Object.values(projects.functions).map((element, i) => (
              <li key={i} className="py-2 px-1">
                {element}
              </li>
            ))}
          </ol>
        </div>

        <div className="py-10">
          <h2 className="text-cyan-400 text-xl py-5 border-b-2 w-fit mb-5">
            {projects.tech}
          </h2>
          <div className="flex flex-row flex-wrap *:object-cover py-10 *:m-auto *:scale-70 rounded-xl p-10">
            <img src={laravelLogo} alt="Laravel" />
            <img src={reactLogo} alt="React" />
            <img src={inertiaLogo} alt="Inertia.js" />
            <img src={mySqlLogo} alt="MySQL" />
            <img src={tailwindLogo} alt="Tailwind CSS" />
            <img src={leafletLogo} alt="Leaflet" />
            <img src={filamentLogo} alt="Filament" />
            <img src={railwayLogo} alt="Railway" />
            <img src={resendLogo} alt="Resend" />
            <img src={cloudflareLogo} alt="Cloudflare R2" />
            <img src={gitLogo} alt="Git" />
            <img src={githubLogo} alt="Github" />
          </div>
        </div>

        <div className="flex items-center content-center">
          {" "}
          <Lightbox
            index={index}
            slides={images}
            plugins={[Inline]}
            on={{
              view: updateIndex(false),
              click: () => toggleOpen(true),
            }}
            carousel={{
              padding: 0,
              spacing: 0,
              imageFit: "cover",
            }}
            inline={{
              style: {
                width: "100%",
                maxWidth: "900px",
                aspectRatio: "3 / 2",
                margin: "0 auto",
              },
            }}
          />
          <Lightbox
            open={open}
            close={() => toggleOpen(false)}
            index={index}
            slides={images}
            on={{ view: updateIndex(true) }}
            animation={{ fade: 0 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
          />
        </div>
        <div className="grid md:grid-cols-2 text-center md:gap-30 gap-2 mt-10 max-w-200 m-auto ">
          <a
            href="https://carmapool.saviciunas.lt"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-cyan-400 px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg
  transition duration-200 ease-in-out hover:shadow-lg hover:shadow-cyan-400/30 hover:bg-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="currentColor"
            >
              <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
            </svg>
            {projects.button}
          </a>

          <a
            href="https://github.com/45SaviciunasPaulius/CarmaPool"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-slate-400 px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg
  transition duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-400/30 hover:bg-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            Github
          </a>
        </div>
      </div>
      <Contacts />
    </>
  );
}
