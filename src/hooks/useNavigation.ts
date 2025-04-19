import { useNavigate } from "react-router-dom";

const useNavigation = (): {
    navigateHome: () => void;
    navigateCreate: () => void;
} => {
    const navigate = useNavigate();

    const navigateHome = () => navigate("/home");
    const navigateCreate = () => navigate("/create");

    return {
        navigateHome,
        navigateCreate,
    };
};

export default useNavigation;
