import React from 'react'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, NavLink } from 'react-router';


function Header() {
  return (
    <div className='nav'>
        <div className="logo"><NavLink to={"/"}>BrandLogo</NavLink></div>
        <div className="nav-links">
            <ul>
                <NavLink to={"/"}><li>Products</li></NavLink>
                {/* <NavLink to={"/profile"}><li><PiUserCircleFill /> Profile</li></NavLink> */}
                <NavLink to={"/wishlist"}><li><IoIosHeartEmpty /> Wishlist</li></NavLink>
                <NavLink to={"/bag"}><li><HiMiniShoppingBag /> Bag</li></NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Header