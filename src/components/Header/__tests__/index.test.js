import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";

const sections = [
  { name: "portraits", description: "Portraits of people in my life" },
];

afterEach(cleanup);

describe("Header component", () => {
  it("renders", () => {
    render(<Header sections={sections} />);
  });

  it("header render matches snapshot", () => {
    const { asFragment } = render(<Header sections={sections} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
