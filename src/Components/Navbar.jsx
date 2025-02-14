import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { BsArrowRightShort } from "react-icons/bs";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import ResponsiveMeun from "../Pages/ResponsiveMeun";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <section section className="fixed top-0 right-0 w-full bg-white z-10 ">
      <ResponsiveMeun shMenu={showMenu} setShMe={setShowMenu} />

      <div className="bg-gradient-to-r from-primary to-secondary ">
        <div className="container lg:px-10 mx-auto max-sm:px-2">
          <div className="items-center justify-between py-1 text-white flex">
            <p>20% off on next booking </p>
            <p>Mobile no : +201067580075 </p>
          </div>
        </div>
      </div>
      {/* desktop Nav */}
      <nav className="w-full bg-white shadow-2xl ">
        <div className="container mx-auto w-full lg:px-10 max-sm:px-10">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <div>
              <img src={logo} alt="logo" width={100} />
            </div>

            <div className="flex  gap-4 ">
              <ul className=" items-center space-x-6 hidden md:flex">
                <li className="py-4">
                  <NavLink activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="py-4">
                  <NavLink to="/blogs">blogs</NavLink>
                </li>

                <li className="py-4">
                  <NavLink to="/Place">Best Blogs</NavLink>
                </li>

                <li className="py-4">
                  <NavLink to={"/about"}>About</NavLink>
                </li>

                <li className="group relative bg-white">
                  <div className="flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <BsArrowRightShort className="text-xl group-hover:rotate-90 duration-300 " />{" "}
                    </span>
                  </div>

                  <div className="hidden group-hover:block absolute top-[20px] w-[100px] z-[9999] shadow-md duration-300 py-1 bg-white left-0">
                    <ul>
                      <li
                        to="/"
                        className="text-center hover:bg-[#DDD] cursor-pointer py-1 rounded-md"
                      >
                        Our Service
                      </li>
                      <li
                        to="/"
                        className="text-center hover:bg-[#DDD] cursor-pointer py-1 rounded-md"
                      >
                        Top Brands
                      </li>
                      <li
                        to="/"
                        className="text-center hover:bg-[#DDD] cursor-pointer py-1 rounded-md"
                      >
                        Location
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex items-center gap-5 ">
                <button className="bg-gradient-to-r from-primary to-secondary cursor-pointer hover:to-primary hover:from-secondary duration-500 transition-all  px-3 py-1 rounded-full text-white ">
                  Book Now
                </button>

                {/* mobile Nav */}
                <nav className="hidden max-md:block">
                  {showMenu ? (
                    <div>
                      <HiMenuAlt1
                        className="cursor-pointer transition-all"
                        size={30}
                        onClick={() => {
                          toggleMenu();
                        }}
                      />
                    </div>
                  ) : (
                    <div className="">
                      <HiMenuAlt3
                        className="cursor-pointer transition-all"
                        size={30}
                        onClick={() => {
                          toggleMenu();
                        }}
                      />
                    </div>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
