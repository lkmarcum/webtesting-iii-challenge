// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("fires a function when buttons are clicked", () => {
    const mockFunc = jest.fn();
    const locked = false;
    const closed = false;
    const { getByText } = render(
      <Controls
        locked={locked}
        closed={closed}
        toggleLocked={mockFunc}
        toggleClosed={mockFunc}
      />
    );
    fireEvent.click(getByText(/close gate/i));
    expect(mockFunc).toHaveBeenCalled();
    fireEvent.click(getByText(/lock gate/i));
    expect(mockFunc).toHaveBeenCalled();
  });
});
