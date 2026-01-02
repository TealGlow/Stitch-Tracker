import { useNavigate } from "react-router-dom";

const useNavigation = (): {
    navigateHome: () => void;
    navigateCreate: () => void;
    navigateAdd: () => void;
} => {
    const navigate = useNavigate();

    const navigateHome = () => navigate("/");
    const navigateCreate = () => navigate("/create");
    const navigateAdd = () => navigate("/add");

    return {
        navigateHome,
        navigateCreate,
        navigateAdd,
    };
};

export default useNavigation;
