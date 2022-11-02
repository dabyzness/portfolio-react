export function hyphenateWords(str) {
  const onlyAlphaSpaces = str.replace(/[^a-zA-Z-\d\s]/g, "");
  const hyphenated = onlyAlphaSpaces.toLowerCase().split(" ").join("-");

  return hyphenated;
}
