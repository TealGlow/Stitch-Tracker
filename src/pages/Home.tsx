import React, { useState } from "react";
import ProjectList, { Project } from "../components/ProjectList";
import Button from "../components/Button";
import AddItemModal, { ModalType, modalType } from "../components/AddItemModal";

const Home = () => {
    const [list, setList] = useState<Project[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState<ModalType|null>();

    const handleShowModal = (mode: ModalType) => {
        setShowModal(true);
        setModalMode(mode)
    };

    const handleHideModal = () => {
        setShowModal(false);
        setModalMode(null);
    };

    const handleListAddItem = (item: Project) => {
        const updatedList = [...list, item];
        handleHideModal();
        setList(updatedList);
    };

    const handleListRemoveItem = (itemId: string) => {
        console.log("hello world");
    };

    return (
        <div>
            <Button onClick={()=>handleShowModal(modalType.NEW)}>Create</Button>
            <br />
            <ProjectList projectList={list} />
            {showModal ? <AddItemModal mode={modalMode} onListAddItem={handleListAddItem} onCloseModal={handleHideModal} /> : null}
        </div>
    );
};

export default Home;
