// Test away

import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
  it("should render Dashboard without crashing", () => {
    render(<Dashboard />);
  });

  describe.skip("Button Text Change", () => {
    // NOW TESTING ON CONTROLS.TEST.JS
    it("should change close gate to open gate", () => {
      const { getByText } = render(<Dashboard />);
      const closeButton = getByText("Close Gate");
      fireEvent.click(closeButton);
      getByText("Open Gate");
    });

    it("should change open gate to close gate", () => {
      const { getByText } = render(<Dashboard />);
      const closeButton = getByText("Close Gate");
      fireEvent.click(closeButton);

      const openButton = getByText("Open Gate");
      fireEvent.click(openButton);
      getByText("Close Gate");
    });
  });
});
