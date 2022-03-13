import React from "react";

import Slidebar from "./Slidebar";

export default {
  component: Slidebar,
  title: "Slidebar",
};

const Template = (args) => <Slidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "slidebar test1",
  min: 0,
  max: 10,
  step: 0.5,
  onChange: (value) => console.log(value),
};
