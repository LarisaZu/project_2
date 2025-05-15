import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// import { THEME } from "6.shared/context/theme/ThemeContext";
import { Tabs } from "./Tabs";

const meta = {
  title: "shared/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  // onClick: fn(),
  args: {
    tabs: [
      { value: "Tab 1", content: "Tab 1" },
      { value: "Tab 2", content: "Tab 2" },
      { value: "Tab 3", content: "Tab 3" },
    ],
    value: "Tab 2",
    onChange: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
