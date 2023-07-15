import { fireEvent, render, screen } from "@testing-library/react";
import About from "../pages/About";
import { expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

test("Article should be rendered", () => {
  render(<About />);
  const aboutElement = screen.getByTestId("about");
  expect(aboutElement).toBeVisible();
});

test("All test should be rendered", () => {
  render(<About />);
  const aboutText = screen.getByTestId("h1");
  const aboutText2 = screen.getByTestId("h2");
  const aboutText3 = screen.getByTestId("h3");
  const aboutText4 = screen.getByTestId("h4");
  const aboutText5 = screen.getByTestId("h5");
  expect(aboutText.textContent).toEqual("Our Services");
  expect(aboutText2.textContent).toEqual(
    "We summarize long and boring news articles for your"
  );
  expect(aboutText3.textContent).toEqual("You can decide the length, ");
  expect(aboutText4.textContent).toEqual("We give you the news summary !! ");
  expect(aboutText5.textContent).toEqual("Enjoy Summarizing");
});
