import React from "react";
import logo from "../assets/logo-arch.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between md:px-32 px-5 p-4 m-2">
      <div className="flex flex-row items-center gap-12  text-lightText p-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav className="hidden md:flex gap-4">
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all"
          >
            How it Works
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all"
          >
            Design Gallery
          </Link>
          <Link
            to="consultation"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightRed transition-all"
          >
            Architects
          </Link>
        </nav>
      </div>

      <div className="flex flex-row items-center p-2 gap-4">
        <Link to="signIn" spy={true} smooth={true} duration={500}>
          Sign In
        </Link>
        <Button name="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
