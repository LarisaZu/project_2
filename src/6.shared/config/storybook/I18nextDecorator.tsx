import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { Decorator, StoryFn } from "@storybook/react/*";
import i18n from "../i18/i18n";

export const I18nextDecorator: Decorator = (Story: StoryFn) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};
