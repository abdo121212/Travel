import { FaUserCircle } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const ResponsiveMeun = ({ shMenu, setShMe }) => {
  const navbarLinks = [
    { id : 1, name: "Home", link: "/" },
    {id :2 , name: "About", link: "/about" },
    {id : 3, name: "Blogs", link: "/blogs" },
    { id : 4,name: "Best Blogs", link: "/place" },
  ];

  return (
    <div
      className={`${
        shMenu ? "left-0" : "-left-[100%]"
      } fixed top-0 bottom-0 z-50 h-screen  w-[75%]  bg-white dark:bg-gray-800 dark:text-white px-8 py-6 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-md `}
    >
      <div>
        {/* top seeciton */}

        <div className="flex items-center justify-start gap-5">
          <FaUserCircle size={50} className="text-gray-500" />
          <div className="text-gray-500 text-sm">
            <h1>Hello User</h1>
            <h2>Premium User</h2>
          </div>
        </div>
        {/* navLinks seeciton */}

        <div className="mt-12 text-black">
          <ul className=" space-y-4 text-lg">
            {navbarLinks.map(({ name, link , id }) => (
              <li
                key={id}
                className="mb-5"
                onClick={() => {
                  setShMe(false);
                }}
              >
                <Link to={link}> {name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMeun;
