import { Component } from "react";
import ToggleThemeBtn from "../home/ToggleThemeBtn";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContextProvider";
class Header extends Component {
  static contextType = ThemeContext;
  render() {
    const { active } = this.context;
    const theme = this.context[active];
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
            <Link to="/completed" className="text-sm font-semibold leading-6 ">
              Completed
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="#"
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
              Log in
            </Link>
            <ToggleThemeBtn></ToggleThemeBtn>
          </div>
        </nav>
        
      </header>
    );
  }
}

export default Header;
