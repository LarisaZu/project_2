type TMods = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: TMods,
  addition: string[]
): string => {
  return [cls, ...addition, Object.keys(mods).filter((key) => mods[key])]
    .join(" ")
    .trim();
};
