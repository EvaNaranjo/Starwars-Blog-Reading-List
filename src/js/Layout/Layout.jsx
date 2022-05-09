import React from "react";
import propTypes from "prop-types";

import { Navbar } from "./Navbar/Navbar.jsx";
import { Footer } from "./Footer/Footer.jsx";


const Layout = (props) => {
   
    return (
        <div>
            <header>
               <Navbar></Navbar>
            </header>
            <div>
                {props.children}
            </div>
            <footer>
                <Footer></Footer>
            </footer>

            <div/>
        </div>
    )
}

Layout.propTypes =  {
    children: propTypes.object

}

export default Layout;