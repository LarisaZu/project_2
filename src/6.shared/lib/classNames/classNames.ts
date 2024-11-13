type TMods = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  addition: string[],
  mods?: TMods
): string => {
  return [
    cls,
    ...addition,
    mods ? Object.keys(mods).filter((key) => mods[key]) : "",
  ]
    .join(" ")
    .trim();
};
