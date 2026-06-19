import localization from "../localization.json";
import { langContext } from "../App";
import { useContext } from "react";

export default function CarmaPool() {
  const language = useContext(langContext);
  const projects =
    localization[language.lang].projects.project_4_detailed ??
    localization.LT.projects.project_4_detailed;

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
        <div></div>
      </div>

      <a href="https://carmapool.saviciunas.lt" target="_blank">
        {projects.button}
      </a>

      <div>Photos</div>
    </div>
  );
}
