import React, { useState } from "react";
import logo from "./logost.png";
import clsx from "clsx";

export default function Header() {
  const [navbarIsActive, setnavbarIsActive] = useState(false);
  
  return (
    <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-900 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => {
              setnavbarIsActive(!navbarIsActive);
            }}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-[#7dba28] focus:outline-none focus:ring-2 focus:ring-[#7dba28] dark:text-gray-700 dark:hover:bg-[#7dba28] dark:focus:ring-gray-700"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={clsx(
            "items-center justify-between w-full md:flex md:w-auto md:order-1",
            {
              hidden: navbarIsActive === false,
              flex: navbarIsActive === false,
            }
          )}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#bosh"
                className="block py-2 px-3 text-white bg-[#7dba28] rounded md:bg-transparent md:text-[#7dba28] md:p-0 md:dark:text-[#7dba28]"
                aria-current="page"
              >
                BOSH SAHIFA
              </a>
            </li>
            <li>
              <a
                href="#kurslar"
                className="block py-2 px-3 text-white rounded hover:bg-[#7dba28] md:hover:bg-transparent md:hover:text-[#7dba28] md:p-0 md:dark:hover:text-[#7dba28] dark:text-white dark:hover:bg-[#7dba28] dark:hover:text-white md:dark:hover:bg-transparent dark:border-white"
              >
                KURSLAR
              </a>
            </li>
            <li>
              <a
                href="#reyting"
                className="block py-2 px-3 text-white rounded hover:bg-[#7dba28] md:hover:bg-transparent md:hover:text-[#7dba28] md:p-0 md:dark:hover:text-[#7dba28] dark:text-white dark:hover:bg-[#7dba28] dark:hover:text-white md:dark:hover:bg-transparent dark:border-white"
              >
                REYTING
              </a>
            </li>
            <li>
              <a
                href="#hodimlar"
                className="block py-2 px-3 text-white rounded hover:bg-[#7dba28] md:hover:bg-transparent md:hover:text-[#7dba28] md:p-0 md:dark:hover:text-[#7dba28] dark:text-white dark:hover:bg-[#7dba28] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                HODIMLAR
              </a>
            </li>
            <li>
              <a
                href="#haqida"
                className="block py-2 px-3 text-white rounded hover:[#7dba28] md:hover:bg-transparent md:hover:text-[#7dba28] md:p-0 md:dark:hover:text-[#7dba28] dark:text-white dark:hover:bg-[#7dba28] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                MARKAZ HAQIDA
              </a>
            </li>
            <li>
              <a
                href="#boglanish"
                className="block py-2 px-3 text-white
                 rounded hover:[#7dba28] md:hover:bg-transparent md:hover:text-[#7dba28] md:p-0 md:dark:hover:text-[#7dba28] dark:text-white dark:hover:bg-[#7dba28] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                BOG'LANISH
              </a>
            </li>
          </ul>
        </div>
       
      </div>

      <div>
        
      </div>
    </nav>
  );
}
