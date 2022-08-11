import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Resume from "..";

afterEach(cleanup);

describe("Resume component", () => {
  // baseline test
  it("renders", () => {
    render(<Resume />);
  });

  // snapshot test
  it("Resume render matches snapshot", () => {
    const { asFragment } = render(<Resume />);

    expect(asFragment()).toMatchSnapshot();
  });
});
