import React from "react";
import styled from "styled-components";

interface Props {
    id: string;
    name: string;
    label?: string;
    required?: boolean;
    ariaLabel?: string;
    placeholder?: string;
    maxHeight?: string;
    tabIndex?: number;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput = ({
    id,
    name,
    label,
    required,
    ariaLabel,
    placeholder,
    maxHeight,
    tabIndex,
    value,
    onChange
}: Props) => {
    return (
        <Container>
            <LabelContainer>
                <Label>{label}</Label>
                {required ? <Required>*</Required> : null}
            </LabelContainer>
            <TextArea
                id={id}
                name={name}
                aria-label={ariaLabel}
                placeholder={placeholder}
                $maxHeight={maxHeight}
                tabIndex={tabIndex}
                value={value}
                onChange={onChange}
            ></TextArea>
        </Container>
    );
};

export default TextAreaInput;

const Container = styled.div`
    width: 100%;
    margin-right: 20px;
`;

const Label = styled.label`
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semibold);

    padding: var(--sizing-8px-rem) 0 var(--sizing-4px-rem) 0;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Required = styled.div`
    color: var(--accent-color-error);
    font-size: var(--sizing-14px-rem);

    align-self: center;
`;

const TextArea = styled.textarea<{ $maxHeight?: string }>`
    box-sizing: border-box;
    width: 100%;
    ${(props) => (props.$maxHeight ? `max-height: ${props.$maxHeight};` : "")}
    margin: 0;

    resize: vertical;

    &:focus {
        outline: none;
        border-color: var(--primary-color-dark);
        border-radius: 3px;
    }
`;
