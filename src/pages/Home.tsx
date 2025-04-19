import React, { useState } from "react";
import ProjectList, { Project } from "../components/ProjectList";
import CreateButton from "../components/CreateButton";

const Home = () => {
    const [list, setList] = useState<Project[]>([]);

    const handleListAddItem = (item: Project) => {
        const updatedList = [...list, item];
        setList(updatedList);
    };

    const handleListRemoveItem = (itemId: string) => {
        console.log("hello world");
    };

    return (
        <div>
            <CreateButton />
            <br />
            <ProjectList projectList={list} />
        </div>
    );
};

export default Home;
