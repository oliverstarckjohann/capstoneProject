import React from "react";
import Settings from "../modules/Settings";

export default {
  title: "modules/Settings",
  component: Settings,
  argTypes: {
    handleChangeGender: { action: "checked" },
  },
};

const Template = (args) => <Settings {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
