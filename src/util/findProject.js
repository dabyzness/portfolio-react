import { projects } from "../data/projects.js";
import { hyphenateWords } from "./hyphenateWords.js";

export function findProject(str) {
  const project = projects.filter(({ title }) => hyphenateWords(title) === str);

  return project[0];
}
