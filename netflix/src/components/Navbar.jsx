import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import searchSvg from "../images/search.svg";
import logo from "../images/logo.svg";
import { auth } from '../firebase';
import { Link } from "react-router-dom";

function Navbar() {
    const [show, handleShow] = useState(false);

    const history = useHistory();
    const signOut = () => auth.signOut();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect (() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    }, []);

	return (
		<nav className="navbar">
			<div className="navbar__poster">
				<Link to="/">
					<img src={logo} />
				</Link>
			</div>
			<div className="navbar__profile">
				<Link to="/search">
					<img className="profile__search" src={searchSvg} />
				</Link>
				<button className="nav_avatar" onClick = {signOut}>Sign Out</button> 
			</div>
		</nav>
	);
}

export default Navbar;