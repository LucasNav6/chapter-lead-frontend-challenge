import React from "react";
import LoginPage from "@Pages/auth/Login.page";
import {render} from "@testing-library/react";

describe("*** PAGES: LOGIN AUTH ***", () => {
  it("should render the page correctly", () => {
    const renderEl = render(<LoginPage />);
    expect(renderEl).toBeTruthy();
    expect(renderEl.getByAltText("padlock")).toBeTruthy();
    expect(renderEl.getByRole("h1")).toBe("Welcome back");
    expect(renderEl.getAllByRole("input")).toHaveLength(2);
    expect(renderEl.getAllByRole("button")).toHaveLength(1);
  });
});
