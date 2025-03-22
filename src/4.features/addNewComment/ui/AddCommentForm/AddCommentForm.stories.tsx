import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { IParameters } from "@config/storybook/preview";

import { StoreDecorator } from "6.shared/config/storybook";
import AddCommentForm from "./AddCommentForm";

type MetaWithParameters = Meta<typeof AddCommentForm> & {
  parameters?: IParameters;
};

const meta: MetaWithParameters = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
  decorators: [StoreDecorator],
  args: { onSendComment: action("onSendComment") },
};

export default meta;

type Story = StoryObj<typeof meta> & {
  parameters?: IParameters;
};

export const Primary: Story = {};
