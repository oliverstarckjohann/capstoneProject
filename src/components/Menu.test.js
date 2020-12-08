import React from "react";
import ReactDOM from "react-dom";
import { getByTestId, render } from "@testing-library/react";
import Navigation from "./Menu";

test("Navigation homebutton renders without errors", () => {
  const { getByTestId } = render(<Navigation />);
  getByTestId("homebutton");
});

test("Navigation aboutbutton renders without errors", () => {
  const { getByTestId } = render(<Navigation />);
  getByTestId("aboutbutton");
});
