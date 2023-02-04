import React from "react";
import logo from "../assets/logo-white.svg";
import fb from "../assets/icon-facebook.svg";
import yt from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/** logo & social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, Rahul Priyadarshi
          </div>
          <div>
            <img src={logo} alt="logo" className="h-8" />
          </div>
          {/** Social links container */}
          <div className="flex justify-center space-x-4">
            <a href="#fb">
              <img src={fb} alt="fb" className="h-8" />
            </a>
            <a href="#twitter">
              <img src={twitter} alt="fb" className="h-8" />
            </a>
            <a href="#instagram">
              <img src={instagram} alt="fb" className="h-8" />
            </a>
            <a href="#yt">
              <img src={yt} alt="yt" className="h-8" />
            </a>
          </div>
        </div>

        {/** List container */}
        <div className="flex justify-around space-x-32 md:m-4">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#a" className="hover:text-brightRed">
              Home
            </a>
            <a href="#a" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#a" className="hover:text-brightRed">
              Products
            </a>
            <a href="#a" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#a" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#a" className="hover:text-brightRed">
              Community
            </a>
            <a href="#a" className="hover:text-brightRed">
              Privacy Policy
            </a>
            <a href="#a" className="hover:text-brightRed">
              About
            </a>
          </div>
        </div>
        {/** Input container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Updates in your inbox"
                className="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button className="px-6 py-2 rounded-full text-white bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, Rahul Priyadarshi
          </div>
        </div>
      </div>
    </footer>
  );
}
