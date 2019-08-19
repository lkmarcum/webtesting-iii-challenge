// Test away
import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("defaults to open/unlocked on initial render", () => {
    const { queryByText } = render(<Dashboard />);
    expect(queryByText(/open/i)).toBeTruthy();
    expect(queryByText(/unlocked/i)).toBeTruthy();
  });
});
