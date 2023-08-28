import { render, screen } from "@testing-library/react";
import App from "../App";
import renderer from "react-test-renderer";

test("renders music library text", () => {
  render(<App />);
  const linkElement = screen.getByText("Music Library");
  expect(linkElement).toBeInTheDocument();
});

test("component renders correctly", () => {
  const rendered = renderer.create(<App />);

  expect(rendered).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
