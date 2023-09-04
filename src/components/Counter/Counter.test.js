// jest -> test runner -> describe, test, it, expect
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter/>", () => {
  test("render the Counter component", () => {
    render(<Counter />);

    const counterElement = screen.getByText(/count/i);
    const buttonElement = screen.getByRole("button", { name: /increment/i });

    expect(counterElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("increment the count by 1", () => {
    render(<Counter />);

    const counterElement = screen.getByText(/count/i);
    const buttonElement = screen.getByRole("button", { name: /increment/i });

    fireEvent.click(buttonElement);

    expect(counterElement).toHaveTextContent("Count: 1");
  });
});
