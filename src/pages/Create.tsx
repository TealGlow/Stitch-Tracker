import React from "react";
import Button from "../components/form-components/Button";
import useNavigation from "../utilities/useNavigation";

const Create = () => {
    const { navigateHome, navigateAdd } = useNavigation();
    return (
        <>
            <Button onClick={navigateHome}>Back</Button>
            <Button onClick={navigateAdd}>Add</Button>
            <div>Create Page</div>
            <label>Project name</label>
            <input type="text" />
            
            
        </>
    );
};

export default Create;
