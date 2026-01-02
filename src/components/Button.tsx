import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = (props: Props) => {
    return <Container onClick={props.onClick}>{props.children}</Container>;
};

export default Button;

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    width: 3.125rem;
    padding: var(--sizing-16px-rem);
    border-radius: var(--border-radius-small);

    background-color: var(--primary-color);
    color: var(--background-color);
`;
