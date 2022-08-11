import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProjectList from "..";

afterEach(cleanup);

describe("ProjectList/Portfolio", () => {
  it("renders", () => {
    render(<ProjectList />);
  });

  it("project list render matched snapshot", () => {
    const { asFragment } = render(<ProjectList />);

    expect(asFragment()).toMatchSnapshot();
  });
});
