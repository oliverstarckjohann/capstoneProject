import { fireEvent, ByTestId, render } from "@testing-library/react";
import App from "./App";

test("Rendering of the Header Component", () => {
  const { getByText } = render(<App />);
  expect(getByText("What to dress today?")).toBeDefined();
});

test("Hamburg-Button is on Homescreen", () => {
  const { getByText } = render(<App />);
  const city = getByText("Hamburg");
  expect(city).toBeInTheDocument();
});

test("Berlin-Button is on Homescreen", () => {
  const { getByText } = render(<App />);
  const city = getByText("Berlin");
  expect(city).toBeInTheDocument();
});

test("Köln-Button is on Homescreen", () => {
  const { getByText } = render(<App />);
  const city = getByText("Köln");
  expect(city).toBeInTheDocument();
});

test("München-Button is on Homescreen", () => {
  const { getByText } = render(<App />);
  const city = getByText("München");
  expect(city).toBeInTheDocument();
});

test("HomeButton Image in Footer Component", () => {
  const { getByAltText } = render(<App />);
  const image1 = getByAltText("home");
  expect(image1).toBeInTheDocument();
});

test("AboutButton Image in Footer Component", () => {
  const { getByAltText } = render(<App />);
  const image2 = getByAltText("about");
  expect(image2).toBeInTheDocument();
});

test("Test Conditions Rendering for Hamburg Button", () => {
  const { getByText, getByTestId } = render(<App />);
  fireEvent.click(getByText("Hamburg"));
  const onTargetConditions = getByTestId("dressconditions");
  expect(onTargetConditions).toBeInTheDocument();
});

test("Test DressesList Rendering for Hamburg Button", () => {
  const { getByText, getByTestId } = render(<App />);
  fireEvent.click(getByText("Hamburg"));
  const onTargetDress = getByTestId("dresslist");
  expect(onTargetDress).toBeInTheDocument();
});

test("Test Function of Home Button in Navigation", () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId("homebutton"));
  const onTargetPage = getByTestId("homescreen");
  expect(onTargetPage).toBeInTheDocument();
});

test("Test Function of About Button in Navigation", () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId("aboutbutton"));
  const onTargetPage = getByTestId("aboutscreen");
  expect(onTargetPage).toBeInTheDocument();
});
