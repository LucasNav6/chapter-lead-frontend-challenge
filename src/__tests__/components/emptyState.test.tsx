import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {EmptyState} from "@Components/index";
import {BrowserRouter} from "react-router-dom";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate
}));
test("renders EmptyState component", () => {
  const redirectTo = "/some-path";
  const title = "Empty State Title";

  render(
    <BrowserRouter>
      <EmptyState redirectTo={redirectTo} title={title} />
    </BrowserRouter>
  );

  expect(screen.getByAltText("empty box")).toBeTruthy();
  expect(screen.getByText(title)).toBeTruthy();
  expect(screen.getByText("Create new")).toBeTruthy();

  fireEvent.click(screen.getByText("Create new"));

  expect(mockUsedNavigate).toHaveBeenCalledWith(redirectTo);
});
