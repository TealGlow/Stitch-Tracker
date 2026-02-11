import React from "react";
import ProjectItem from "./project-item-card/projectItem";
import styled from "styled-components";

interface Props {
    projectList: Project[] | undefined;
}

export interface Project {
    name: string;
    type: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    notes: string | undefined;
}

const ProjectList = ({projectList}: Props) => {
    return (
         <>
            {projectList && projectList.length > 0 && (
                <div>Select a project to edit:</div>
            )}
            <Container>
                {projectList?.map((project) => (
                    <ProjectItem name={project.name} startDate={project.startDate} endDate={project.endDate} type={project.type} />
                ))}
            </Container>
        </>
    );
};

export default ProjectList;

const Container = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
`