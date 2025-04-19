import React from "react";

interface Props {
    projectList: Project[] | undefined;
}

export interface Project {
    id: string;
    name: string;
}

const ProjectList = (props: Props) => {
    return (
        <>
            {props.projectList && props.projectList.length > 0 ? (
                <div>Select a project to edit:</div>
            ) : null}
        </>
    );
};

export default ProjectList;
