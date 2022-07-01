import React from "react";
import { Provider } from "react-redux";
import InboxScreen from "./InboxScreen";
import { MockedState } from "./TaskList.stories";
import { rest } from "msw";
import store from "../lib/store";

import { fireEvent, within, waitFor, waitForElementToBeRemoved } from "@storybook/testing-library";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InboxScreen />;

export const Default = Template.bind({});
// https://mswjs.io/
// https://storybook.js.org/addons/msw-storybook-addon
Default.parameters = {
  msw: {
    handlers: [
      rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      }),
    ],
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
  await waitFor(async () => {
    await fireEvent.click(canvas.getByLabelText("pinTask-1"));
    await fireEvent.click(canvas.getByLabelText("pinTask-3"));
  });
};

/**
 * 스토리북을 확인하면 error 스토리가 의도한 대로 작동하는지 확인 할 수있습니다.
 * MSW 는 원격 API 호출을 가로채 적절한 응답을 제공합니다.
 */
export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.status(403));
      }),
    ],
  },
};
