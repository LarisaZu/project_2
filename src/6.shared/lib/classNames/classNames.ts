export type TMods =
  | Record<string, string | boolean | undefined | null>
  | null
  | undefined;

export const classNames = (
  cls: string,
  addition: Array<string | undefined> = [],
  mods?: TMods
): string => {
  return [
    cls,
    ...addition.filter(Boolean),
    ...(mods ? Object.keys(mods).filter((key) => mods[key]) : []),
  ]
    .join(" ")
    .trim();
};
