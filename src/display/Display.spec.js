// Test away!
import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Display from "./Display";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("correctly displays unlocked/open text based on props", () => {
    const { queryByText } = render(<Display locked={false} closed={false} />);
    expect(queryByText(/open/i)).toBeTruthy();
    expect(queryByText(/unlocked/i)).toBeTruthy();
  });

  it("correctly displays locked/closed text based on props", () => {
    const { queryByText } = render(<Display locked={true} closed={true} />);
    expect(queryByText(/closed/i)).toBeTruthy();
    expect(queryByText(/locked/i)).toBeTruthy();
  });

  it("applies green-led class given appropriate props", () => {
    const { queryByText } = render(<Display locked={false} closed={false} />);
    expect(queryByText(/open/i).classList.contains("green-led")).toBe(true);
    expect(queryByText(/unlocked/i).classList.contains("green-led")).toBe(true);
  });

  it("applies red-led class given appropriate props", () => {
    const { queryByText } = render(<Display locked={true} closed={true} />);
    expect(queryByText(/closed/i).classList.contains("red-led")).toBe(true);
    expect(queryByText(/locked/i).classList.contains("red-led")).toBe(true);
  });
});
