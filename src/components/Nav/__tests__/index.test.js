import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const sections = [
  { name: "portraits", description: "Portraits of people in my life" },
];

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(<Nav sections={sections} />);
  });

  // snapshot test
  it("nav render matches snapshot", () => {
    const { asFragment } = render(<Nav sections={sections} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
