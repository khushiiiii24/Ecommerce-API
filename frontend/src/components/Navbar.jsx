import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBagLine } from "react-icons/ri";
import homeMainImage from "../assets/homeMainImage.png";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="leftNavbar">
          <h2>Kinn</h2>
          <ul className="leftNavbarUl">
            <li>SHOP</li>
            <li>EARINGS</li>
            <li>BRACELETS</li>
            <li>RINGS</li>
            <li>NECKLACE</li>
            <li>CHARMS & PENDANTS</li>
            <li>BRIDAL</li>
            <li>ABOUT</li>
            <li>
           
              <Link to="/home/allproducts">ALL PRODUCTS</Link>
            </li>
          </ul>
        </div>
        <div className="rightNavbar">
          <ul className="rightNavbarUl">
            <li>
              <IoSearch />
            </li>
            <li>
              INR/
              <MdOutlineCurrencyRupee />
            </li>
            <li>
              <VscAccount />
            </li>
            <li>
              <RiShoppingBagLine />
            </li>
            <Link to="/logout">
              <li>
                <MdLogout />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="homeMainImage">
        <img src={homeMainImage} alt="" className="homeMainImage" />
      </div>
      <div className="homeImageContent">
        <h2>
          Introducing—<em>Unexpected Proposal</em>
        </h2>
        <p>
          Bespoke engagement and wedding heirlooms for modern love
          stories—classic in quality, unexpected in form.
        </p>
        <div className="shopTheCollection">SHOP THE COLLECTION</div>
      </div>
    </>
  );
}

export default Navbar;
