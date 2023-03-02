import { Component } from "react";
import ToggleThemeBtn from "../home/ToggleThemeBtn";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";
class Header extends Component {

  render() {

    const bfLoginLinks = [
      { label: "Login", path: "/login" },
      { label: "Register", path: "/register" },
    ];
    const afLoginLinks = [
      { label: "Home", path: "/" },
      { label: "CreateBlog", path: "/create_blog" },
    ];
    return (
      <AuthContext.Consumer>
        {(authContextState) => {
          const { user, accessToken } = authContextState
          return (
            <ThemeContext.Consumer>
              {(ThemeContextState) => {
                const { active } = ThemeContextState;
                const theme = ThemeContextState[active];
                return (
                  <header
                    className="bg-white"
                    style={{
                      backgroundColor: theme.headerColor,
                      color: theme.headerTextColor,

                      width: "100%",
                    }}
                  >
                    <nav
                      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                      aria-label="Global"
                    >
                      <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                          <span className="sr-only">Your Company</span>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="flex lg:hidden">
                        <button
                          type="button"
                          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="hidden lg:flex lg:gap-x-12">
                        <Link to="/" className="text-sm font-semibold leading-6 ">
                          Todo
                        </Link>
                        <Link
                          to="/todaycompleted"
                          className="text-sm font-semibold leading-6 "
                        >
                          Tody's Completed
                        </Link>
                        <Link to="/othertodos" className="text-sm font-semibold leading-6 ">
                          Other todo
                        </Link>
                      </div>
                      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {accessToken && <div>
                          <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                          <div id="dropdownDelay" style={{ zIndex: 1999, position: "relative" }} className="  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                              </li>
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                              </li>
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                              </li>
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                              </li>
                            </ul>
                          </div>
                        </div>}
                        {!accessToken && <Link
                          to="/login"
                          className="text-sm font-semibold leading-6 "
                          style={{
                            color: "crimson",
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            backgroundColor: "white",
                            padding: "6px",
                            borderRadius: "20%",
                            border: "1px solid crimson",
                          }}
                        >
                          login
                        </Link>}




                        <ToggleThemeBtn></ToggleThemeBtn>
                      </div>
                    </nav>
                  </header>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>

    );
  }
}

export default Header;
