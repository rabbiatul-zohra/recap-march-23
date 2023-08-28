import { render, screen } from "@testing-library/react";
import Artist from "../components/Artist";

describe("Artist", () => {
  const mockData = {
    image: "Some image",
    name: "Artist Name",
  };

  it("renders image correctly", () => {
    render(<Artist image={mockData.image} name={mockData.name} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
