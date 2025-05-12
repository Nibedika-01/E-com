import React, { useContext, useState } from "react";
import './Navbar.css'
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext";

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartItems} = useContext(HomeContext)


    return (
        <div className="navBar">
            <div className="navLogo">
                <img src={assets.logo_icon} alt="" />
                <p>Go<span>Thrift</span></p>
            </div>

            <ul className="navMenu">
                <li onClick={() => { setMenu("home") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>{menu == "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("top") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/top'>Top</Link>{menu == "top" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("bottom") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/bottom'>Bottom</Link>{menu == "bottom" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("dress") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/dress'>Dresses</Link>{menu == "dress" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("accesories") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/accesories'>Accesories</Link>{menu == "accesories" ? <hr /> : <></>}</li>
            </ul>

            <div className="navLoginCart">
                <Link to='/login'><button>Login</button></Link>
                <img src={assets.search_icon} alt="" />
                <Link to='/cart'><img src={assets.cart_icon} alt="" /></Link>
                <div className="navCartCount">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}

export default Navbar