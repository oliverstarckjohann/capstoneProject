import { render } from "@testing-library/react";
import App from "./App";

describe("App render Header", () => {
  test("Rendering of the Header Component", () => {
    const { getByText } = render(<App />);
    expect(getByText("What to dress today?")).toBeDefined();
  });
});

describe("App Buttons on Homescreen 1", () => {
  test("Hamburg is on Homescreen", () => {
    const { getByText } = render(<App />);
    const city = getByText("Hamburg");
    expect(city).toBeInTheDocument();
  });
});

describe("App Buttons on Homescreen 2", () => {
  test("Berlin is on Homescreen", () => {
    const { getByText } = render(<App />);
    const city = getByText("Berlin");
    expect(city).toBeInTheDocument();
  });
});

describe("App Buttons on Homescreen 3", () => {
  test("Köln is on Homescreen", () => {
    const { getByText } = render(<App />);
    const city = getByText("Köln");
    expect(city).toBeInTheDocument();
  });
});

describe("App Buttons on Homescreen 4", () => {
  test("München is on Homescreen", () => {
    const { getByText } = render(<App />);
    const city = getByText("München");
    expect(city).toBeInTheDocument();
  });
});

describe("App HomeButton in Menue", () => {
  test("HomeButton Image in Footer Component", () => {
    const { getByAltText } = render(<App />);
    const image1 = getByAltText("home");
    expect(image1).toBeInTheDocument();
  });
});

describe("App AboutButton in Menue", () => {
  test("AboutButton Image in Footer Component", () => {
    const { getByAltText } = render(<App />);
    const image2 = getByAltText("about");
    expect(image2).toBeInTheDocument();
  });
});
