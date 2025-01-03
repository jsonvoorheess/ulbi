import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ThemeButton } from "./Button";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "text",
    },
};

export const Clear: Story = {
    args: {
        children: "text",
        theme: ThemeButton.CLEAR
    },
};
//
export const Outline: Story = {
    args: {
        children: "text",
        theme: ThemeButton.OUTLINE
    },
};
//
// export const Small: Story = {
//     args: {
//         size: "small",
//         label: "Button",
//     },
// };