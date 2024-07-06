import React from "react";
import { render } from "@testing-library/react";
import ListOfCoupons from "./ListOfCoupons";
import "@testing-library/jest-dom";

// Mock data for testing
const mockValues = [
  { buyValue: 10, bonusValue: 2 },
  { buyValue: 20, bonusValue: 5 },
];

describe("ListOfCoupons Component", () => {
  it("renders correctly with values", () => {
    const { getByText } = render(<ListOfCoupons values={mockValues} />);

    // Verify that CouponCard components are rendered for each value
    mockValues.forEach((value) => {
      const buyValueText = getByText(`$${value.buyValue}`);
      const bonusValueText = getByText(`$${value.bonusValue}`);

      expect(buyValueText).toBeInTheDocument();
      expect(bonusValueText).toBeInTheDocument();
    });
  });

  it("renders correctly without values", () => {
    // Render component without values prop
    const { container } = render(<ListOfCoupons />);

    // Verify that it renders without throwing errors
    expect(container).toBeInTheDocument();
  });

  it("validates PropTypes", () => {
    // Test PropTypes validation with invalid props
    const spyConsoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Render component with invalid props to trigger PropTypes warnings
    render(<ListOfCoupons values={[{ invalidProp: "invalid" }]} />);

    // Check if PropTypes warning is printed
    expect(spyConsoleError).toHaveBeenCalled();

    spyConsoleError.mockRestore();
  });
});
