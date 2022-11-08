import { createRef } from "react";
import { useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experience } from "../../data/experience.js";
import styles from "./Resume.module.css";

const Resume = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={styles.experience}>Experience</h1>
      <VerticalTimeline layout={"2-columns"} lineColor={"black"}>
        {experience.map((exp, i) => (
          <VerticalTimelineElement
            key={exp.name}
            className="vertical-timeline-element--work"
            iconStyle={{
              background: "whitesmoke",
              cursor: i ? "default" : "pointer",
            }}
            contentStyle={{ maxWidth: "500px" }}
            date={exp.start ? `${exp.start} - ${exp.end}` : `${exp.end}`}
            icon={
              <img
                className={styles.iconImg}
                src={exp.logo}
                alt={`${exp.name} logo`}
              />
            }
            iconOnClick={() => {
              if (i) {
                return;
              }
              setIsClicked(!isClicked);
            }}
          >
            {i ? (
              <div className={styles.container}>
                <div className={styles.header}>
                  <div
                    style={{ backgroundColor: exp.color || "" }}
                    className={styles.bannerContainer}
                  >
                    {exp.banner ? (
                      <img
                        className={styles.bannerImg}
                        src={exp.banner}
                        alt={`${exp.name} banner`}
                      />
                    ) : (
                      <h2
                        style={{
                          margin: "0",
                          fontSize: "2rem",
                          color: "black",
                        }}
                      >
                        YOUR COMPANY HERE
                      </h2>
                    )}
                  </div>

                  <p style={{ marginTop: "4px" }}>
                    {exp.title} | {exp.location}
                  </p>
                </div>

                <div className={styles.body}>
                  <ul>
                    {exp.description.map((bullet, i) => (
                      <li key={i} style={{ fontSize: ".75rem" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.footer}></div>
              </div>
            ) : isClicked ? (
              <div className={styles.container}>
                <div className={styles.header}>
                  <div
                    style={{ backgroundColor: exp.color || "" }}
                    className={styles.bannerContainer}
                  >
                    {exp.banner ? (
                      <img
                        className={styles.bannerImg}
                        src={exp.banner}
                        alt={`${exp.name} banner`}
                      />
                    ) : (
                      <h2>YOUR COMPANY HERE</h2>
                    )}
                  </div>

                  <p style={{ marginTop: "4px" }}>
                    {exp.title} | {exp.location}
                  </p>
                </div>

                <div className={styles.body}>
                  <ul>
                    {exp.description.map((bullet, i) => (
                      <li key={i} style={{ fontSize: ".75rem" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.footer}></div>
              </div>
            ) : (
              ""
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <a
        href={require("./DamianBzdyra-resume.pdf")}
        className={styles.btnSlide2}
        download
      >
        <span className={styles.circle2}></span>
        <span className={styles.title2}>Download CV</span>
        <span className={styles.titleHover2}>Click Here</span>
      </a>
    </main>
  );
};

export default Resume;
