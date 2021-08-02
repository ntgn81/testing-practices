import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import * as SumWrapper from "./components/Sum";

describe("App", () => {
  beforeEach(() => {
    jest.spyOn(SumWrapper, "Sum").mockImplementation(() => <></>);
  });

  it("renders Sum component with correct props", () => {
    render(<App />);

    expect(SumWrapper.Sum).toHaveBeenCalledWith(
      {
        a: "100",
        b: "101"
      },
      {}
    );
  });
});
