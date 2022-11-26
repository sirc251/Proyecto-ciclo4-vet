import React from 'react'
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
 
export const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="logo" width="70" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
            <div className="carrito">
                <box-icon name="cart">0</box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}