import React from "react";
import Dresses from "../modules/Dresses";

export default {
  title: "modules/Dresses",
  component: Dresses,
};

const Template = (args) => <Dresses {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  city: "Hamburg",
  temp: "5",
  dresscode: "100",
  conditions: "Es ist kalt und trocken.",
  key: "123",
  dresses: [
    { id: "2", dresscode: "60", path: "280dc60_01.jpg" },
    { id: "3", dresscode: "60", path: "280dc60_02.jpg" },
    { id: "3", dresscode: "60", path: "280dc60_03.jpg" },
  ],
  dress: [{ id: "2", dresscode: "100", path: "280dc00_01.jpg" }],
};
