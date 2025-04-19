import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
