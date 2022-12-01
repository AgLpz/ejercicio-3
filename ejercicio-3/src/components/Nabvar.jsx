import React from 'react'
import tdtLogo from"../assets/tdtLogo.png"
import "../assets/styles/Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbarContainer">

    <picture className="imgContainer">
    <img className="tdtLogo" src={tdtLogo} alt="TDT GLOBAL" />
    </picture>

            <div className="btnContainer">
            <a className="favButton" href="#">Ver favoritos 3</a>
            </div>
        </div>
    )
}
 