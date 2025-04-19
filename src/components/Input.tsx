import { ChangeEvent } from "react";
import { Project } from "./ProjectList";
import React from "react";

interface Props {
    id: string;
    value: string | undefined;
    required: boolean;
    minLength: number | undefined;
    maxLength: number | undefined;
    onChange: (project: Project) => void;
}

const Input = (props: Props) => {
    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange({
            id: event.target.name,
            name: event.target.value,
        });
    };

    return (
        <input
            id={props.id}
            value={props.value}
            placeholder={props.value}
            required={props.required}
            minLength={props.minLength}
            maxLength={props.maxLength}
            type="text"
            onChange={handleValueChange}
        />
    );
};

export default Input;
