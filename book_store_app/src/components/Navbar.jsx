import React from "react";
import Logo from "../assets/booklogo.png";
import Darkmode from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Navbar({ handleOrder }) {
  const NavList = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Best Seller",
      link: "#",
    },
  ];

  const DropLinks = [
    {
      id: 1,
      name: "Trending",
      link: "#",
    },
    {
      id: 2,
      name: "Best Seller",
      link: "#",
    },
    {
      id: 3,
      name: "New Arrivals",
      link: "#",
    },
  ];
  return (
    <div className="sticky top-0 z-10 shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-100">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-1">
              <img src={Logo} alt="" className="w-12 h-10" />
              {/* w-{fraction} means width in %  */}
              MyBooks
            </a>
          </div>
          <div className="flex items-center justify-between gap-4 font-semibold">
            <div>
              <Darkmode></Darkmode>
            </div>
            <ul className="items-center gap-4 hidden sm:flex">
              {NavList.map((list) => (
                <li key={list.id}>
                  <a
                    className="inline-block py-4 px-4 hover:text-primary duration-300"
                    href={list.link}
                  >
                    {list.name}
                  </a>
                </li>
              ))}
              {/* Drop down section */}
              <li className="group relative cursor-pointer ">
                <a className="flex h-[72px] items-center gap[2px] " href="/#">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:selection:rotate-180" />
                  </span>
                </a>
                {/* Dropdown link section */}
                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px] dark:bg-gray-900 dark:text-white">
                  <ul>
                    {DropLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button onClick={handleOrder} className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300  ">
              Cart
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
