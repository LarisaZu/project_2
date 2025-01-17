import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from "./Counter";
import { componentRender } from "6.shared/lib";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    screen.debug();
    expect(screen.getByTestId("counter-title")).toHaveTextContent("10");
  });
  test("increment", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incrementBtn = screen.getByTestId("increment-btn");
    screen.debug();
    // fireEvent.click(incrementBtn);
    userEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-title")).toHaveTextContent("11");
  });
  // test("decrement", () => {
  //   componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
  //   screen.debug();
  //   const decrementBtn = screen.getByTestId("decrement-btn");
  //   fireEvent.click(decrementBtn);
  //   expect(screen.getByTestId("counter-title")).toHaveTextContent("9");
  // });
});
