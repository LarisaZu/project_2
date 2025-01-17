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
  test("increment", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const user = userEvent.setup();
    const incrementBtn = screen.getByTestId("increment-btn");
    screen.debug();
    // fireEvent.click(incrementBtn);
    await user.click(incrementBtn);
    expect(screen.getByTestId("counter-title")).toHaveTextContent("11");
  });
  test("decrement", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const user = userEvent.setup();
    screen.debug();
    const decrementBtn = screen.getByTestId("decrement-btn");
    // fireEvent.click(decrementBtn);
    await user.click(decrementBtn);
    expect(screen.getByTestId("counter-title")).toHaveTextContent("9");
  });
});
