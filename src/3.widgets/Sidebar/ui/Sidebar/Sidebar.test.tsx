import { fireEvent, screen } from "@testing-library/react";

import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "6.shared/lib";

describe("Sidebar", () => {
  test("test render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    // screen.debug();
  });
  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    screen.debug();
  });
});
