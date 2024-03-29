import { useRef } from "react";
import styles from "./Home.module.css";

import Welcome from "./Welcome";
import TechStack from "../../components/TechStack/TechStack";
import ProjectStack from "../../components/ProjectStack/ProjectStack";
import Block from "../../components/Block/Block";
import TextHalf from "../../components/Block/TextHalf";
import ImageHalfCircle from "../../components/Block/ImageHalfCircle";
import ImageHalfFull from "../../components/Block/ImageHalfFull";

// Data
import { professionalSummary, aboutMe } from "../../data/about";
import { useState, useEffect } from "react";
import InfiniteLooper from "../../components/TechStack/InfiniteLooper";
import { stackImg } from "../../data/stackImg";
import Resume from "../../components/Resume/Resume";

export default function Home() {
  // This needs fixing because its not a smooth transition
  const welcomeRef = useRef();
  const profileRef = useRef();

  const updatePosition = () => {
    if (!welcomeRef.current || !profileRef.current) {
      return;
    }

    if (window.innerHeight - window.scrollY < window.innerHeight * 0.3333) {
      welcomeRef.current.style.display = "none";
      profileRef.current.style.display = "block";
    } else {
      profileRef.current.style.display = "none";
      welcomeRef.current.style.display = "block";
    }
  };

  window.addEventListener("scroll", updatePosition);

  return (
    <main>
      <Welcome ref={welcomeRef} />

      <Block>
        <TextHalf
          title={professionalSummary.title}
          textArr={professionalSummary.textArr}
        />
        <ImageHalfCircle
          imgSrc={professionalSummary.img}
          altText="Profile"
          ref={profileRef}
        />
      </Block>

      <TechStack />

      <ProjectStack />

      <Block>
        <ImageHalfFull imgSrc={aboutMe.img} altText="Pierogi" />
        <TextHalf title={aboutMe.title} textArr={aboutMe.textArr} />
      </Block>

      <Resume />
    </main>
  );
}
