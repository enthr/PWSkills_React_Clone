import { Outlet } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Root() {
    return (
        <>
            <header><Header /></header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
        </>
    );
}

export default Root;