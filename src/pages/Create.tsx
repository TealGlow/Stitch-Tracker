import React from "react";
import Button from "../components/Button";
import useNavigation from "../utilities/useNavigation";

const Create = () => {
    const { navigateHome, navigateCreate } = useNavigation();
    return (
        <>
            <Button onClick={navigateHome}>Back</Button>
            <Button onClick={navigateCreate}>Add</Button>
        </>
    );
};

export default Create;
