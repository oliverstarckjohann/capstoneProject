import React from "react";
import About from "../modules/About";

export default {
  title: "modules/About",
  component: About,
};

const Template = (args) => <About {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
