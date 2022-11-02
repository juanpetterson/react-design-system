import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import { SignIn } from "./SignIn";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Logged in successfully!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByLabelText("E-mail address"), "abc@abc.com");
    userEvent.type(canvas.getByLabelText("Your password"), "12345678");
    userEvent.click(canvas.getByRole("button"));

    expect(
      await canvas.findByText("Logged in successfully!")
    ).toBeInTheDocument();
  },
};
