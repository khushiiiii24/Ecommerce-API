import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBagLine } from "react-icons/ri";
import homeMainImage from "../assets/homeMainImage.png";
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
        <p>Bespoke engagement and wedding heirlooms...</p>
        <button>SHOP THE COLLECTION</button>
      </div>
    </>
  );
}

export default Navbar;
