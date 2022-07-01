import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  argTypes: {
    onArchiveTask: {}, // onArchiveTask 이벤트 발생 시 콜백으로 넘어오는 값 출력: onArchiveTask: "2"
    onPinTask: { action: "onPinTask clicked!" }, // onPinTask clicked!으로 액션명을 덮어씀: onPinTask clicked!: "2"
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2022, 2, 17, 9, 0),
  },
  onArchiveTask: (id) => console.log("default", id), // Actions에는 아무것도 안찍히고, 브라우저 개발툴에 console 찍힘
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    id: "2",
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    id: "3",
    state: "TASK_ARCHIVED",
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
