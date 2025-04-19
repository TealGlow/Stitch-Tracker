import React, { useState } from "react";
import ProjectList, { Project } from "../components/ProjectList";
import Button from "../components/Button";
import useNavigation from "../utilities/useNavigation";

const Home = () => {
    const [list, setList] = useState<Project[]>([]);
    const { navigateCreate } = useNavigation();

    const handleListAddItem = (item: Project) => {
        const updatedList = [...list, item];
        setList(updatedList);
    };

    const handleListRemoveItem = (itemId: string) => {
        console.log("hello world");
    };

    return (
        <div>
            <Button onClick={navigateCreate}>+</Button>
            <br />
            <ProjectList projectList={list} />
        </div>
    );
};

export default Home;
