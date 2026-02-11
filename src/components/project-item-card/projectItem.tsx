import React from "react";
import styled from "styled-components";

interface Props {
    name: string;
    type: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    // isFinished: boolean;
};

const ProjectItem = ({name, type, startDate, endDate}: Props) => {
    return (
        <Container>
            <Card>
                <Header>{name}</Header>
                <Body>{type}
                    {startDate} - {endDate}
                </Body>
            </Card>
        </Container>
    );
};

export default ProjectItem;

const Container = styled.div`
    margin-right: 4px;
`;

const Card = styled.div`
    width: 250px;
    height: 300px;
    border: 1px solid var(--primary-color);
`;

const Header = styled.div`
    background-color: var(--primary-color);
    color: var(--background-color);
    font-size: var(--font-size-heading);

    padding: var(--sizing-16px-rem);
`;

const Body = styled.div`
    padding: var(--sizing-16px-rem);
`;
