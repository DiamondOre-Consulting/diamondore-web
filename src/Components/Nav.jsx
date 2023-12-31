import React, {useState} from "react";
import Diamond from "/src/assets/DOC-2.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <header aria-label="Site Header">
      <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-2">
            <img
              className="max-w-[20rem] block flex justify-left items-left"
              src={Diamond}
              alt=""
            />
            {/* <a className="decoration-none" href="/">
              <p className="text-3xl font-bold text-newBlue leading-6">
                Diamond Ore <br />{" "}
                <span className="text-xl font-semibold text-newBlue ">
                  Consulting Pvt. Ltd.
                </span>
              </p>
            </a> */}
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden lg:block">
              <ul className="flex items-center gap-5 text-md">
                <li>
                  <a
                    className="font-semibold text-newBlue transition hover:text-newBlue/50"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                {/* <li>
                  <a
                    className="text-lg font-semibold text-newBlue transition hover:text-newBlue/50"
                    href="/"
                  >
                    About
                  </a>
                </li> */}

                <li>
                  <Link
                    className="font-semibold text-newBlue transition hover:text-newBlue/50"
                    to={"https://forms.gle/Ge6z8qFXAbLHQNBD6"}
                  >
                    Job Consultation
                  </Link>
                </li>

                <li>
                  <Link
                    className="font-semibold text-newBlue transition hover:text-newBlue/50"
                    to={"https://forms.gle/Ge6z8qFXAbLHQNBD6"}
                  >
                    CV Building
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 hidden lg:block">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to={"/contact"}
                >
                  Enquire Now
                </Link>
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to={"/consulting"}
                >
                  Mutual Funds
                </Link>
              </div>
            </div>

            <div className="block lg:hidden">
                <button
                  onClick={toggleMobileNav}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <nav className="lg:hidden bg-gray-100">
          <ul className="flex flex-col items-center gap-6 text-sm py-4">
            <li>
              <a
                className="text-lg font-semibold text-newBlue transition hover:text-newBlue/50"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <Link
                className="text-lg font-semibold text-newBlue transition hover:text-newBlue/50"
                to={"https://forms.gle/Ge6z8qFXAbLHQNBD6"}
              >
                For Job Consultation
              </Link>
            </li>

            <li>
              <Link
                className="text-lg font-semibold text-newBlue transition hover:text-newBlue/50"
                to={"https://forms.gle/Ge6z8qFXAbLHQNBD6"}
              >
                For CV Building
              </Link>
            </li>
            <li>
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                to={"/contact"}
              >
                Enquire Now
              </Link>
            </li>
            <li>
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                to={"/consulting"}
              >
                Mutual Funds
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Nav;
