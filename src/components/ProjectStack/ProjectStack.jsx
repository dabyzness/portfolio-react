import styles from "./ProjectStack.module.css";

const ProjectStack = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        <p style={{ width: "40%" }}>
          "Tot, or Taste of TikTok for long, is a MERN web app for users who
          want to track and display restaurants, bars, and other lifestyle
          locations that they found through TikTok. It's essentially if Yelp and
          Tiktok merged. In order to save a tiktok video to the your page,
          simply copy and paste the URL of the video and Tot will do the rest.
          You can even play your own videos or play through the countless others
          that Totheads have uploaded -- no need to switch apps to watch on
          TikTok! [Currently Mobile-Only Design]",
        </p>
        <ul className={styles.stack}>
          <li>
            <img src="./img/react.png" alt="" />
            React.JS
          </li>
          <li>
            <img src="./img/typescript.png" alt="" />
            TypeScript
          </li>
          <li>
            <img src="./img/postgresql.png" alt="" />
            Postgres
          </li>
          <li>
            <img src="./img/mongodb.png" alt="" />
            MongoDB
          </li>
          <li>
            <img src="./img/python.png" alt="" />
            Python
          </li>
        </ul>
      </div>

      <div className={styles.rightBorder}></div>
      <div className={styles.bottomBorder}></div>
      <h2 className={styles.projectsHeading}>Projects</h2>
    </div>
  );
};

export default ProjectStack;
