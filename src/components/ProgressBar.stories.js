import React from "react";

import ProgressBar from "./ProgressBar";

export default {
    component: ProgressBar,
    title: "ProgressBar",
};

const Template = (args) => <ProgressBar {...args} />;

export const Exam1 = Template.bind({});
Exam1.args = {
    value: 50,
};

export const Exam2 = Template.bind({});
Exam2.args = {
    value: 100,
};

export const Exam3 = Template.bind({});
Exam3.args = {
    value: 0,
};
