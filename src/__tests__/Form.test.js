import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("Form", () => {
  const validProps = {
    handleAddArtist: jest.fn(),
    handleCloseModal: jest.fn(),
  };
  it("correctly renders input fields", () => {
    render(
      <Form
        handleAddArtist={validProps.handleAddArtist}
        handleCloseModal={validProps.handleCloseModal}
      />
    );

    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements).toHaveLength(3);
  });

  it("renders Submit button", () => {
    render(
      <Form
        handleAddArtist={validProps.handleAddArtist}
        handleCloseModal={validProps.handleCloseModal}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("onSubmit correct function is called", () => {
    render(
      <Form
        handleAddArtist={validProps.handleAddArtist}
        handleCloseModal={validProps.handleCloseModal}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(validProps.handleAddArtist).toBeCalled();
    expect(validProps.handleAddArtist).toBeCalledTimes(1);

    expect(validProps.handleCloseModal).toBeCalled();
    expect(validProps.handleCloseModal).toBeCalledTimes(1);
  });
});
