import React from "react";
import styled from "styled-components";

export type ModalType = 'Edit' | 'New';
export const modalType = Object.freeze({
    EDIT:'Edit',
    NEW: 'New'
});

interface Props {
    mode?: ModalType | null;
    onListAddItem: (item: any) => void;
    onCloseModal?: () => void;
}

const AddItemModal = ({ mode = modalType.NEW, onCloseModal }: Props) => {
    return (
        <Background>
            <Container>
                <Header>
                    <Title>{mode === modalType.NEW ? 'Add New Project' : 'Edit Project'}</Title>
                    <CloseButton onClick={onCloseModal}>✖</CloseButton>
                </Header>
                <Body>
                    <Label>Project Name</Label><br/>
                    <input type="text" />

                    <Label>Project Type</Label>
                    <input type="text"/>
                </Body>
            </Container>
        </Background>
    );
};

export default AddItemModal;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const Container = styled.div`
    width: 75%;
    height: 75%;

    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`;

const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

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
`

const Title = styled.h1`
    color: var(--background-color);
    font-size: var(--font-size-heading);

    padding: var(--sizing-16px-rem);
`;

const Body = styled.div`
    display:flex;
    flex-direction: column;

    color: var(--font-color);   
    background-color: var(--background-color);

    padding: var(--sizing-16px-rem);
`;

const Label = styled.label`
    font-size:var(--font-size-small);
    font-weight: var(--font-weight-semibold);

    padding: 8px 0 4px 0;
`;