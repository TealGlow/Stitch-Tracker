import React, { useState } from "react";
import Button from "../components/Button";
import useNavigation from "../hooks/useNavigation";
import { Project } from "../components/ProjectList";
import Input from "../components/Input";

const Create = () => {
    const [project, setProject] = useState<Project>(initialProjectState);
    const [formErrors, setFormErrors] = useState<ProjectErrors>(
        createProjectFormErrors,
    );
    const { navigateHome, navigateCreate } = useNavigation();

    const handleCreate = () => {};

    const handleChange = (p: Project) => setProject(p);

    const validateForm = () => {
        if (!project.name)
            setFormErrors({ ...formErrors, name: "Name is required" });
    };

    return (
        <>
            <Button onClick={navigateHome}>Back</Button>
            <Button onClick={navigateCreate}>Add</Button>
            <div>
                <br />
                Project Name:
                <Input
                    id={project.id}
                    value={project.name}
                    required={true}
                    onChange={handleChange}
                    minLength={undefined}
                    maxLength={undefined}
                />
            </div>
        </>
    );
};

export default Create;

const initialProjectState: Project = {
    id: "",
    name: "",
};

interface ProjectErrors {
    id: string | undefined;
    name: string | undefined;
}
const createProjectFormErrors: ProjectErrors = {
    id: undefined,
    name: undefined,
};
