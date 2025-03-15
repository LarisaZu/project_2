import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { Decorator, StoryFn, Parameters } from "@storybook/react/*";

export const RouterDecorator: Decorator = (
  Story: StoryFn,
  { parameters }: Parameters
) => {
  const { router } = parameters;

  if (!router) {
    return (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    );
  } else {
    const { path, route } = router;
    return (
      <MemoryRouter initialEntries={[encodeURI(route)]}>
        <Routes>
          <Route path={path} element={<Story />} />
        </Routes>
      </MemoryRouter>
    );
  }
};
