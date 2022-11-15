import { render, screen } from "@testing-library/react";
import Books from "./Books";

test("renders learn react link", () => {
    render(<Books />);
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
});
