import logo from "../assets/logo.svg"

const Navbar = () => {
 return (
   <nav className="relative container mx-auto p-4">
     <div className="flex items-center justify-between">
       <div className="pt-2">
         <img src={logo} alt="logo" />
       </div>
       <div className="hidden md:flex space-x-6">
         <a href="#pricing" className="hover:text-darkGreyishBlue">
           Pricing
         </a>
         <a href="#products" className="hover:text-darkGreyishBlue">
           Product
         </a>
         <a href="#about" className="hover:text-darkGreyishBlue">
           About Us
         </a>
         <a href="#careers" className="hover:text-darkGreyishBlue">
           Careers
         </a>
         <a href="#community" className="hover:text-darkGreyishBlue">
           Community
         </a>
       </div>
       <a
         href="#button"
         className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
       >
         Get Started
       </a>
     </div>
   </nav>
 );
}

export default Navbar;

// when class is changed to "absolute" for smaller screen to hide navbar within a hamburger icon


// space-x-6 --> to have 6 unit of spaces in x-axis among all the elements inside it.
// md:flex --> screen size >= md, display should be flex.