import React from "react";
import Homescreen from "../modules/Homescreen";

export default {
  title: "modules/Homescreen",
  component: Homescreen,
  argTypes: {
    citySelection: { action: "clicked" },
    pageNavigation: { action: "navigated" },
  },
};

const Template = (args) => <Homescreen {...args} />;

export const Berlin = Template.bind({});
Berlin.args = {};

export const Hamburg = Template.bind({});
Hamburg.args = {};

export const München = Template.bind({});
München.args = {};

export const Köln = Template.bind({});
Köln.args = {};
