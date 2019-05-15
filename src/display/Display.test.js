// Test away

import React from 'react';
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display.js";

describe("<Display/>", () => {
    it("should render Display without crashing", () => {
        render(<Display/>);
    });

    describe("Gate Display Default View", () => {
        it("should see gate unlocked and open as default", () => {
            const { getByText } = render(<Display/>);
            getByText(/unlocked/i);
            getByText(/open/i);
        });
    });
});


