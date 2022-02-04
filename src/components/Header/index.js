import React, { useState } from "react";
import { Link } from "gatsby";
import "./style.scss";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const Header = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const [nav, setNav] = useState(false);
  const [subNav, setSubNav] = useState(false);
  const isBigScreen = matches;
  const showNav = isBigScreen || nav;

  return (
    <div id="newid" className="header__wrapper sticky top-0 bg-white z-10">
      <div className="container">
        <header className="flex justify-between text-sm py-5 ">
          <div id="logo">
            <Link to="/">
              <img src="/img/logo.png" alt="logo" className="" />
            </Link>
          </div>
          <button onClick={() => setNav(true)}>
            <i className="fas fa-bars"></i>
          </button>
          <nav
            className={`flex justify-center items-center ${
              showNav ? "open" : ""
            }`}
          >
            {showNav && <div onClick={() => setNav(false)} />}
            <ul className="flex justify-center items-center">
              <li className="lii">
                <Link
                  to="#"
                  className="mx-5"
                  onClick={() => setSubNav(prev => matches === false ? !prev : prev)}
                  onMouseEnter={() => setSubNav(true)}
                >
                  Services
                </Link>
              </li>
              <li className="lii">
                <Link to="/industries" className="mx-5">
                  Industries
                </Link>
              </li>
              <li className="lii">
                <Link to="/resources" className="mx-5">
                  Resources
                </Link>
              </li>
              <li className="lii">
                <Link to="/about" className="mx-5">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  // className="uur mx-5 py-4 px-5 rounded-full text-white bg-button-color"
                >
                  <button className="buttonnewsss">
                  Lets talk
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <nav
          id="subMenu"
          className={`absolute py-5 bg-white ${
            isBigScreen
              ? subNav
                ? "block"
                : "hidden"
              : showNav && subNav
              ? "open"
              : ""
          }`}
          style={{ top: 88, left: 0, right: 0 }}
        >
          <ul className="w-5/6 mx-auto flex justify-between" onMouseLeave={() => setSubNav(false)}>
            <li className="flex items-center justify-between text-xl font-bold w-li rounded-lg bg-blue-100 bg-opacity-25">
              <div className="px-4 py-5">
                Software <br />
                Product <br />
                Engineering
              </div>
              <Link
                to="/services/software"
                className="flex items-center h-full px-5 rounded-tr-lg rounded-br-lg bg-blue-200 bg-opacity-25"
              >
                <i className="fa fa-angle-right text-center" />
              </Link>
            </li>
            <li className="flex items-center justify-between text-xl font-bold w-li rounded-lg bg-purple-100 bg-opacity-50">
              <div className="px-4 py-5">
                Enterprise <br />
                Solutions
              </div>
              <Link
                to="/services/enterprise"
                className="flex items-center h-full px-5 rounded-tr-lg rounded-br-lg bg-purple-200 bg-opacity-50"
              >
                <i className="fa fa-angle-right text-center" />
              </Link>
            </li>
            <li className="flex items-center justify-between text-xl font-bold w-li rounded-lg bg-pink-100 bg-opacity-50">
              <div className="px-4 py-5">
                Cloud <br />
                Managed <br />
                services
              </div>
              <Link
                to="/services/major-group"
                className="flex items-center h-full px-5 rounded-tr-lg rounded-br-lg bg-pink-200 bg-opacity-25"
              >
                <i className="fa fa-angle-right text-center" />
              </Link>
            </li>
            <li className="flex items-center justify-between text-xl font-bold w-li rounded-lg bg-green-100 bg-opacity-25">
              <div className="px-4 py-5">
                Ecommerce <br />
                &amp; Learning <br />
                Solutions
              </div>
              <Link
                to="/services/ecomerce"
                className="flex items-center h-full px-5 bg-green-200 bg-opacity-25 rounded-tr-lg rounded-br-lg"
              >
                <i className="fa fa-angle-right text-center" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
