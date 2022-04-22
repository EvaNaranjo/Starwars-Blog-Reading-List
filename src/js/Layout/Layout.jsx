import React from "react";
import propTypes from "prop-types";

import { Navbar } from "./Navbar/Navbar.jsx";
import { Footer } from "./Footer/Footer.jsx";


const Layout = (props) => {
    console.log
    return (
        <>
            <header>
               <Navbar></Navbar>
            </header>
            <div>
                {props.children}
            </div>
            <footer>
                <Footer></Footer>
            </footer>

        </>
    )
}

Layout.propTypes =  {
    children: propTypes.func

}

export default Layout;