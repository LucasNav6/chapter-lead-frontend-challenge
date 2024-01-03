import React from "react";
import LoginPage from "@Pages/auth/Login.page";
import {render} from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn()
}));

describe("*** PAGES: LOGIN AUTH ***", () => {
  it("should render the page correctly", () => {
    const renderEl = render(<LoginPage />);

    expect(renderEl).toBeTruthy();
    expect(renderEl.getByAltText("padlock")).toBeTruthy();

    const h1Element = renderEl.getByRole("heading", {level: 1, name: /Welcome back/i});
    expect(h1Element).toBeTruthy();

    const emailElements = renderEl.queryAllByRole("textbox");
    expect(emailElements).toHaveLength(1);

    const buttonElement = renderEl.getByRole("button", {name: /Sign in/i});
    expect(buttonElement).toBeTruthy();
  });
});
