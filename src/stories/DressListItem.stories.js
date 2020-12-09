import React from "react";
import DressListItem from "../components/DressListItem";

export default {
  title: "components/DressListItem",
  component: DressListItem,
};

const Template = (args) => <DressListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  key: "123",
  path: "280dc70_02.jpg",
  dress: { path: "280dc70_02.jpg" },
};
