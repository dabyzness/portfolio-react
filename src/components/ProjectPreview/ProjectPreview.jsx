import { Link } from "react-router-dom";

import { hyphenateWords } from "../../util/hyphenateWords.js";

const ProjectPreview = ({ title, image }) => {
  return (
    <div>
      <img
        style={{ width: "250px", height: "250px", objectFit: "cover" }}
        src={image}
        alt={title}
        referrerPolicy="no-referrer"
      />

      <section>
        <h3>{title}</h3>

        <Link to={`/projects/${hyphenateWords(title)}`}>
          <button>Learn more</button>
        </Link>
      </section>
    </div>
  );
};

export default ProjectPreview;
