import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddItemModal, { modalType } from "../AddItemModal";
import '@testing-library/jest-dom';

describe("AddItemModal", () => {
    it("renders new project title", () => {
        render(<AddItemModal mode={modalType.NEW} onListAddItem={jest.fn()} />);

        expect(screen.getByText("Add New Project")).toBeInTheDocument();
    });

    it("updates input values on change", async () => {
        const user = userEvent.setup();
        render(<AddItemModal onListAddItem={jest.fn()} />);

        const nameInput = screen.getByLabelText(/project name/i);
        await user.type(nameInput, "New Architecture");

        expect(nameInput).toHaveValue("New Architecture");
    });

    it("shows validation error when name is missing", async () => {
        const user = userEvent.setup();
        render(<AddItemModal onListAddItem={jest.fn()} />);

        const submitButton = screen.getByRole("button", { name: /add!/i });
        await user.click(submitButton);

        expect(screen.getByText("Name is required.")).toBeInTheDocument();
    });

    it("calls onCloseModal when the close button is clicked", async () => {
        const user = userEvent.setup();
        const handleClose = jest.fn();
        render(
            <AddItemModal
                onCloseModal={handleClose}
                onListAddItem={jest.fn()}
            />,
        );

        const closeButton = screen.getByText("✖");
        await user.click(closeButton);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("renders edit title when mode is EDIT", () => {
        render(
            <AddItemModal mode={modalType.EDIT} onListAddItem={jest.fn()} />,
        );

        expect(screen.getByText("Edit Project")).toBeInTheDocument();
    });

    it("has accessible form controls", () => {
        render(<AddItemModal onListAddItem={jest.fn()} />);

        // This checks both the label/aria-label and the presence of the input
        expect(
            screen.getByRole("textbox", { name: /project name/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /project type/i }),
        ).toBeInTheDocument();

        // Note: <input type="date"> has a role of "textbox" in some environments
        // but is often better found via label text once htmlFor is fixed.
        expect(screen.getByLabelText(/start date/i)).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /notes/i }),
        ).toBeInTheDocument();
    });
});
