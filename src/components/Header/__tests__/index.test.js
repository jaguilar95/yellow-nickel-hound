import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";

const sections = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const currentSection = { name: "About Me" };
const mockSetCurrentSection = jest.fn();

afterEach(cleanup);

describe("Header component", () => {
  it("renders", () => {
    render(
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={mockSetCurrentSection}
      />
    );
  });

  it("header render matches snapshot", () => {
    const { asFragment } = render(
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={mockSetCurrentSection}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
