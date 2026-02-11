import React, { useState } from "react";
import styled from "styled-components";
import Button from "../form-components/Button";
import TextInput from "../form-components/TextInput";
import DateInput from "../form-components/DateInput";
import TextAreaInput from "../form-components/TextAreaInput";
import {
    FormErrorStateAddProject,
    FormStateAddProject,
    HandleFieldChangeFn,
} from "./AddItemModalModel";

export type ModalType = "Edit" | "New";
export const modalType = Object.freeze({
    EDIT: "Edit",
    NEW: "New",
});

interface Props {
    mode?: ModalType | null;
    state?: FormStateAddProject;
    onListAddItem: (item: FormStateAddProject) => void;
    onCloseModal?: () => void;
}

const AddItemModal = ({ mode = modalType.NEW, onCloseModal, onListAddItem }: Props) => {
    const [formState, setFormState] = useState<FormStateAddProject>(buildEmptyFormState);
    const [formErrorState, setFormErrorState] = useState<FormErrorStateAddProject>(
        buildEmptyFormErrorState,
    );

    const handleSubmit = () => {
        const formErrors = buildFormErrorState(formState);
        setFormErrorState(formErrors);
        const validation = validateForm(formErrorState);

        if (!validation) {
            console.log("submit", formState);
            onListAddItem(formState);
        }
    };

    const handleFieldChange: HandleFieldChangeFn = (key, value) => [
        setFormState({
            ...formState,
            [key]: value,
        }),
    ];

    return (
        <Backdrop>
            <Container>
                <Header>
                    <Title>
                        {mode === modalType.NEW
                            ? "Add New Project"
                            : "Edit Project"}
                    </Title>
                    <CloseButton onClick={onCloseModal}>✖</CloseButton>
                </Header>
                <Body>
                    <TextInput
                        ariaLabel="Project Name Input"
                        label="Project Name"
                        id="name"
                        name="name"
                        value={formState.name}
                        placeholder="Name"
                        tabIndex={0}
                        error={formErrorState.nameError}
                        onChange={(e) =>
                            handleFieldChange("name", e.target.value)
                        }
                        required
                    />

                    <TextInput
                        ariaLabel="Project Type Input"
                        label="Project Type"
                        id="type"
                        name="type"
                        value={formState.type}
                        placeholder="Type"
                        onChange={(e) =>
                            handleFieldChange("type", e.target.value)
                        }
                        tabIndex={1}
                    />

                    <DateInput
                        ariaLabel="Start Date Input"
                        label="Start Date"
                        id="startDate"
                        name="startDate"
                        value={formState.startDate}
                        onChange={(e) =>
                            handleFieldChange("startDate", e.target.value)
                        }
                        tabIndex={2}
                    />

                    <TextAreaInput
                        ariaLabel="Project Notes Input"
                        id="notes"
                        name="notes"
                        label="Notes"
                        maxHeight="300px"
                        value={formState.notes}
                        onChange={(e) =>
                            handleFieldChange("notes", e.target.value)
                        }
                        tabIndex={4}
                    />
                    <Button onClick={handleSubmit}>Add!</Button>
                </Body>
            </Container>
        </Backdrop>
    );
};

export default AddItemModal;

const buildEmptyFormState = (): FormStateAddProject => ({
    name: "",
    type: "",
    startDate: "",
    endDate: "",
    notes: "",
    isFinished: false
});

const buildEmptyFormErrorState = (): FormErrorStateAddProject => ({
    nameError: undefined,
});

const buildFormErrorState = (formState: FormStateAddProject): FormErrorStateAddProject => ({
    nameError: formState.name ? undefined : "Name is required.",
});

const validateForm = (formErrorState: FormErrorStateAddProject) =>
    Object.values(formErrorState).some((value) => !!value);

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--modal-backdrop-color);
    z-index: 999;
`;

const Container = styled.div`
    width: 50%;
    height: 75%;

    max-height: 900px;

    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: var(--primary-color);
`;

const CloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: var(--sizing-32px-rem);
    width: var(--sizing-32px-rem);

    padding: var(--sizing-4px-rem);

    font-size: var(--sizing-24px-rem);
    color: var(--background-color);

    user-select: none;
    cursor: pointer;
`;

const Title = styled.h1`
    color: var(--background-color);
    font-size: var(--font-size-heading);

    padding: var(--sizing-16px-rem);
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;

    color: var(--font-color);
    background-color: var(--secondary-color-light);

    padding: var(--sizing-16px-rem);
`;
