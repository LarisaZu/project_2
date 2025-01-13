import { fireEvent, screen } from "@testing-library/react";

import { Sidebar } from "./Sidebar";
import { componentRender } from "6.shared/lib";
import { routePath, AppRoute } from "6.shared/config/routeConfig/routeConfig";

describe("Sidebar", () => {
  test("test render", () => {
    componentRender(<Sidebar />, { route: routePath[AppRoute.MAIN] });
    screen.debug();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    // screen.debug();
  });
  test("test toggle", () => {
    componentRender(<Sidebar />, { route: routePath[AppRoute.MAIN] });
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    // screen.debug();
  });
});
