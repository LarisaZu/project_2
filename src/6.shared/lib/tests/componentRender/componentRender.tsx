import { ReactNode, Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import { StoreProvider } from "1.app/providers/StoreProvider";
import i18nForTests from "6.shared/config/i18/i18nForTests";
import { IStateSchema } from "1.app/providers/StoreProvider";

interface IRenderComponentOptions {
  route?: string;
  initialState?: IStateSchema;
}

export const componentRender = (
  component: ReactNode,
  options: IRenderComponentOptions = {}
) => {
  const { route = "/", initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <Suspense fallback="">
          <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </Suspense>
      </MemoryRouter>
    </StoreProvider>
  );
};
