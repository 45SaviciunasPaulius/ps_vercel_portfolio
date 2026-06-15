import { useContext, useState } from "react";
import localization from "../localization.json";
import { langContext } from "../App";
import ProjectCard from "./ProjectCard";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

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

//Project one
import techmart_1 from "../assets/projects/Techmart/1.webp";
import techmart_2 from "../assets/projects/Techmart/2.webp";
import techmart_3 from "../assets/projects/Techmart/3.webp";
import techmart_4 from "../assets/projects/Techmart/4.webp";
import techmart_5 from "../assets/projects/Techmart/5.webp";
import techmart_6 from "../assets/projects/Techmart/6.webp";
import techmart_7 from "../assets/projects/Techmart/7.webp";
import techmart_8 from "../assets/projects/Techmart/8.webp";
import techmart_9 from "../assets/projects/Techmart/9.webp";
import techmart_10 from "../assets/projects/Techmart/10.webp";

//Project two

import renginus_1 from "../assets/projects/Renginus/1.webp";
import renginus_2 from "../assets/projects/Renginus/2.webp";
import renginus_3 from "../assets/projects/Renginus/3.webp";
import renginus_4 from "../assets/projects/Renginus/4.webp";
import renginus_5 from "../assets/projects/Renginus/5.webp";
import renginus_6 from "../assets/projects/Renginus/6.webp";
import renginus_7 from "../assets/projects/Renginus/7.webp";

// Project three

import dokubox_0 from "../assets/projects/Dokubox/0.webp";
import dokubox_1 from "../assets/projects/Dokubox/1.webp";
import dokubox_2 from "../assets/projects/Dokubox/2.webp";
import dokubox_3 from "../assets/projects/Dokubox/3.webp";
import dokubox_4 from "../assets/projects/Dokubox/4.webp";
import dokubox_5 from "../assets/projects/Dokubox/5.webp";
import dokubox_6 from "../assets/projects/Dokubox/6.webp";

// Project four

import Soon_0 from "../assets/projects/Soon/0.webp";

export default function Projects() {
  const language = useContext(langContext);
  const projects =
    localization[language.lang].projects ?? localization.LT.projects;

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);

  return (
    <div className="flex flex-col items-center my-30" id="Projects">
      <h1 className="mx-5 text-heading font-bold text-xl mb-7">
        {projects.heading}
      </h1>
      <div className="w-full flex flex-col items-center">
        <ProjectCard
          className="lg:scale-110 mb-10 border-2 border-cyan-700 shadow-lg shadow-cyan-900/60 p-3"
          firstPhoto={Soon_0}
          title={projects.project_4.title}
          comment={projects.project_4.comment}
          grade={projects.project_4.grade}
          date={projects.project_4.date}
          about={projects.project_4.about}
        >
            <button className="bg-[#332f2c40] text-subtitle text-sm p-5 py-1 rounded-lg">
              {projects.project_4.button}
            </button>
        </ProjectCard>

        <ProjectCard
          onClick={() => setOpenSecond(true)}
          firstPhoto={renginus_1}
          title={projects.project_2.title}
          date={projects.project_2.date}
          repoLink="https://github.com/45SaviciunasPaulius/Renginus"
          about={projects.project_2.about}
        >
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={phpLogo} alt="PHP" />
          <img src={mySqlLogo} alt="MySQL" />
          <img src={xamppLogo} alt="XAMPP" />
          <img src={bootstrapLogo} alt="Bootstrap" />
        </ProjectCard>

        <Lightbox
          open={openSecond}
          close={() => setOpenSecond(false)}
          slides={[
            { src: renginus_1, title: "Login/ Prisijungti" },
            { src: renginus_2, title: "Index / Pagrindinis" },
            { src: renginus_3, title: "Filter / Filtravimas" },
            { src: renginus_4, title: "Entry / Įrašas" },
            {
              src: renginus_5,
              title: "Profile + AdminPanel / Profilis + Administravimo skiltis",
            },
            {
              src: renginus_6,
              title: "Entry registration / Įrašo registracija",
            },
            { src: renginus_7, title: "Add user / Pridėti vartotoja" },
          ]}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          styles={{ container: { zIndex: 9999 } }}
        />

        <ProjectCard
          onClick={() => setOpenFirst(true)}
          firstPhoto={techmart_1}
          title={projects.project_1.title}
          date={projects.project_1.date}
          repoLink="https://github.com/45SaviciunasPaulius/Techmart"
          about={projects.project_1.about}
        >
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={phpLogo} alt="PHP" />
          <img src={mySqlLogo} alt="MySQL" />
          <img src={xamppLogo} alt="XAMPP" />
        </ProjectCard>

        <Lightbox
          open={openFirst}
          close={() => setOpenFirst(false)}
          slides={[
            { src: techmart_1, title: "Index" },
            { src: techmart_2, title: "Login / Prisijungti" },
            { src: techmart_3, title: "Register / Registracija" },
            { src: techmart_4, title: "Categories / Kategorijos" },
            { src: techmart_5, title: "Search / Paieška" },
            { src: techmart_6, title: "Entry / Įrašas" },
            { src: techmart_7, title: "All entries / visi įrašai" },
            { src: techmart_8, title: "Entry / Įrašas" },
            { src: techmart_9, title: "User entries / Vartotojo Įrašai" },
            {
              src: techmart_10,
              title: "Entry registration / Įrašo registracija",
            },
          ]}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          styles={{ container: { zIndex: 9999 } }}
        />

        <ProjectCard
          onClick={() => setOpenThird(true)}
          firstPhoto={dokubox_0}
          title={projects.project_3.title}
          date={projects.project_3.date}
          repoLink="https://github.com/45SaviciunasPaulius/Dokubox"
          about={projects.project_3.about}
        >
          <img src={reactLogo} alt="React" />
          <img src={appwriteLogo} alt="Appwrite" />
          <img src={jsLogo} alt="JavaScript" />
        </ProjectCard>

        <Lightbox
          open={openThird}
          close={() => setOpenThird(false)}
          slides={[
            { src: dokubox_1, title: "Login/ Prisijungti" },
            { src: dokubox_2, title: "Register / Registravimas" },
            { src: dokubox_3, title: "Index / Pagrindinis" },
            {
              src: dokubox_4,
              title: "Entry registration / Įrašo registracija",
            },
            {
              src: dokubox_5,
              title: "Profile / Profilis",
            },
            {
              src: dokubox_6,
              title: "Entry / Įrašas",
            },
          ]}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          styles={{ container: { zIndex: 9999 } }}
        />
      </div>
    </div>
  );
}
