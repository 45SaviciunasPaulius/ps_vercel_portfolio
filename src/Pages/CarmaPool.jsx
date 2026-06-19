import localization from "../localization.json";
import { langContext } from "../App";
import { useContext, useState } from "react";
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
    <div className="p-20">
      <div>
        <h1>{projects.title}</h1>
        <div>{projects.date}</div>
        <div>{projects.grade}</div>
      </div>

      <div>
        <div>{projects.about}</div>
        <ol className="list-decimal">
          {Object.values(projects.functions).map((element, i) => (
            <li key={i}>{element}</li>
          ))}
        </ol>
      </div>

      <div>
        <h2>{projects.tech}</h2>
        <div>
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

      <a href="https://carmapool.saviciunas.lt" target="_blank">
        {projects.button}
      </a>
      <a
        href="https://github.com/45SaviciunasPaulius/CarmaPool"
        target="_blank"
      >
        Github
      </a>

      <div>
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
    </div>
  );
}
