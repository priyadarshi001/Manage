import logo from "../assets/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link
            spy={true}
            to="Home"
            smooth={true}
            className="hover:text-darkGreyishBlue cursor-pointer"
          >
            Home
          </Link>
          <Link
            spy={true}
            to="About"
            smooth={true}
            className="hover:text-darkGreyishBlue cursor-pointer"
          >
            About Us
          </Link>
          <Link
            spy={true}
            to="Testimonials"
            smooth={true}
            className="hover:text-darkGreyishBlue cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            spy={true}
            to="Blog"
            smooth={true}
            className="hover:text-darkGreyishBlue cursor-pointer"
          >
            Blogs
          </Link>
        </div>
        <a
          href="#button"
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>

        {/** Hamburger Icon */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        {/** Mobile Menu --> NOT WORKING*/}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#a">Pricing</a>
            <a href="#a">Product</a>
            <a href="#a">About Us</a>
            <a href="#a">Careers</a>
            <a href="#a">Community</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// when class is changed to "absolute" for smaller screen to hide navbar within a hamburger icon

// space-x-6 --> to have 6 unit of spaces in x-axis among all the elements inside it.
// md:flex --> screen size >= md, display should be flex.
