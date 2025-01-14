import { ReactNode, Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import i18nForTests from "6.shared/config/i18/i18nForTests";

interface IRenderComponentOptions {
  route?: string;
}

export const componentRender = (
  component: ReactNode,
  options: IRenderComponentOptions = {}
) => {
  const { route = "/" } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Suspense fallback="">
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </Suspense>
    </MemoryRouter>
  );
};
