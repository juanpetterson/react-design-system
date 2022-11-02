import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type something..." />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const InputWithError: StoryObj<TextInputRootProps> = {
  name: "Input with error",
  args: {
    hasError: true,
  },
};

export const InputWithoutIcon: StoryObj<TextInputInputProps> = {
  name: "Input without icon",
  args: {
    children: [<TextInput.Input placeholder="Type something..." />],
  },
};
