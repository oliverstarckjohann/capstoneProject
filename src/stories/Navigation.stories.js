import React from "react";
import Navigation from "../components/Navigation";

export default {
  title: "components/Navigation",
  component: Navigation,
  argTypes: {
    onNavigate: { action: "navigated" },
  },
};

const Template = (args) => <Navigation {...args} />;

export const home = Template.bind({});
home.args = {};

export const about = Template.bind({});
about.args = {};
