import React from "react";

import Loading from "./Loading";

export default {
  component: Loading,
  title: "Loading",
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 30,
  lineColor: "black",
  backgroundColor: "#26c6da",
};
