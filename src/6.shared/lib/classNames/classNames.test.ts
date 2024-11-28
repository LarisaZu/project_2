import { describe, expect, test } from "@jest/globals";
import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first class", () => {
    expect(classNames("someClassName")).toBe("someClassName");
  });
  test("with addition", () => {
    expect(classNames("someClassName", ["class1", "class2"])).toBe(
      "someClassName class1 class2"
    );
  });
  test("with mods two true", () => {
    expect(
      classNames("someClassName", ["class1", "class2"], {
        hovered: true,
        focused: true,
      })
    ).toBe("someClassName class1 class2 hovered focused");
  });
  test("with mods one false", () => {
    expect(
      classNames("someClassName", ["class1", "class2"], {
        hovered: true,
        focused: false,
      })
    ).toBe("someClassName class1 class2 hovered");
  });
  test("with mods one null", () => {
    expect(
      classNames("someClassName", ["class1", "class2"], {
        hovered: true,
        focused: null,
      })
    ).toBe("someClassName class1 class2 hovered");
  });
  test("with mods one undefined", () => {
    expect(
      classNames("someClassName", ["class1", "class2"], {
        hovered: true,
        focused: undefined,
      })
    ).toBe("someClassName class1 class2 hovered");
  });
  test("with mods null", () => {
    expect(classNames("someClassName", ["class1", "class2"], null)).toBe(
      "someClassName class1 class2"
    );
  });
});
