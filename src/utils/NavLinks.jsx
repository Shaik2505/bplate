import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  const baseClasses =
    "text-white block md:inline-block hover:text-gray-200 transition duration-300";

  return (
    <>
      <Link to="home" onClick={onLinkClick} className={baseClasses}>
        Home
      </Link>
      <Link to="about" onClick={onLinkClick} className={baseClasses}>
        About
      </Link>
      <Link to="contactUs" onClick={onLinkClick} className={baseClasses}>
        Contact
      </Link>
      <Link to="profile" onClick={onLinkClick} className={baseClasses}>
        Profile
      </Link>
    </>
  );
};

export default NavLinks;
