import React from "react";
import Switch from "../components/Switch";

export default {
  title: "components/Switch",
  component: Switch,
  argTypes: {
    handleChangeGender: { action: "checked" },
  },
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  gender: "f",
};
