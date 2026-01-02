import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import './variables.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/create" element={<Create />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
