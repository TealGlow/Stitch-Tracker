import React from "react";
import styled from "styled-components";

interface Props {
    id: string;
    name: string;
    label?: string;
    required?: boolean;
    ariaLabel?: string;
    placeholder?: string;
    tabIndex?: number;
    error?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
    id,
    name,
    placeholder,
    label,
    required,
    ariaLabel,
    tabIndex,
    error,
    value,
    onChange
}: Props) => {
    return (
        <>
            <LabelContainer>
                <Label>{label}</Label>
                {required ? <Required>*</Required> : null}
            </LabelContainer>
            <Input
                type="text"
                placeholder={placeholder}
                id={id}
                name={name}
                aria-label={ariaLabel}
                tabIndex={tabIndex}
                value={value}
                onChange={onChange}
            />
            {error ? <Error>{error}</Error> : null}
        </>
    );
};

export default TextInput;

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

const Input = styled.input`
    &:focus {
        outline: none;
        border-color: var(--primary-color-dark);
        border-radius: 3px;
    }
`;

const Error = styled.div`
    font-size: var(--sizing-12px-rem);
    color: var(--accent-color-error);
    padding-top: var(--sizing-4px-rem);
`;
