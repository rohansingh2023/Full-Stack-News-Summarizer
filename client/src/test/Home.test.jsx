import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

it("Locate Button", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const buttonElement = screen.getByText(/Summarize Now/i);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
});
