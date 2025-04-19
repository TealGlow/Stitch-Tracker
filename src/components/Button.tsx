import React, { PropsWithChildren } from "react";

interface Props {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = (props: Props) => {
    return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
