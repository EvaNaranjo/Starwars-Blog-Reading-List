import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/star-wars-logo.png";
import "./navbar.css"



export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src={logo} alt="Logo" />
			<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
						
			<select className="form-select" aria-label="Default select example">
				<option selected> Favourites
				</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};

