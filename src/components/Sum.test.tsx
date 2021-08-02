import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Sum } from "./Sum";

describe("Sum", () => {
  it("returns correct sum for 5 and 6", () => {
    render(<Sum a="5" b="6" />);

    expect(screen.getByTestId("sum")).toHaveTextContent("11");
  });
});
