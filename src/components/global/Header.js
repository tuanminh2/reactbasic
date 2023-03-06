import { Component } from "react";
import ToggleThemeBtn from "../home/ToggleThemeBtn";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";

import { useNavigate } from "react-router-dom";

function NavigateToNewRoute({
  showUserInfo,
  hdlOnClickUser,
  theme,
  authContextState,
}) {
  const navigate = useNavigate();
  const { user, avatar, signOut, accessToken } = authContextState;
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
        {user.name}
          {accessToken && (
            <div>
              <button
                id="dropdownDelayButton"
                onClick={() => hdlOnClickUser()}
                className=""
              >
                <img className="avatar" src={user.avatar} alt={user.name} />
              
              </button>

              <div
                id="dropdownDelay"
                style={{ zIndex: 1000, position: "fixed" }}
                className={`${
                  showUserInfo ? "" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </li>

                  <li
                    onClick={() => {
                      hdlOnClickUser();
                      signOut();
                      navigate("/login");
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    logout
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!accessToken && (
            <Link
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
            </Link>
          )}

          <ToggleThemeBtn></ToggleThemeBtn>
        </div>
      </nav>
    </header>
  );
}

class Header extends Component {
  state = {
    showUserInfo: false,
  };
  hdlOnClickUser = () => {
    const oldVal = !this.state.showUserInfo;
    this.setState({
      showUserInfo: oldVal,
    });
  };
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
          return (
            <ThemeContext.Consumer>
              {(ThemeContextState) => {
                const { active } = ThemeContextState;
                const theme = ThemeContextState[active];
                return (
                  // <header
                  //   className="bg-white"
                  //   style={{
                  //     backgroundColor: theme.headerColor,
                  //     color: theme.headerTextColor,

                  //     width: "100%",
                  //   }}
                  // >
                  //   <nav
                  //     className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                  //     aria-label="Global"
                  //   >
                  //     <div className="flex lg:flex-1">
                  //       <a href="#" className="-m-1.5 p-1.5">
                  //         <span className="sr-only">Your Company</span>
                  //         <img
                  //           className="h-8 w-auto"
                  //           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  //           alt=""
                  //         />
                  //       </a>
                  //     </div>
                  //     <div className="flex lg:hidden">
                  //       <button
                  //         type="button"
                  //         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  //       >
                  //         <span className="sr-only">Open main menu</span>
                  //         <svg
                  //           className="h-6 w-6"
                  //           fill="none"
                  //           viewBox="0 0 24 24"
                  //           stroke-width="1.5"
                  //           stroke="currentColor"
                  //           aria-hidden="true"
                  //         >
                  //           <path
                  //             stroke-linecap="round"
                  //             stroke-linejoin="round"
                  //             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  //           />
                  //         </svg>
                  //       </button>
                  //     </div>
                  //     <div className="hidden lg:flex lg:gap-x-12">
                  //       <Link
                  //         to="/"
                  //         className="text-sm font-semibold leading-6 "
                  //       >
                  //         Todo
                  //       </Link>
                  //       <Link
                  //         to="/todaycompleted"
                  //         className="text-sm font-semibold leading-6 "
                  //       >
                  //         Tody's Completed
                  //       </Link>
                  //       <Link
                  //         to="/othertodos"
                  //         className="text-sm font-semibold leading-6 "
                  //       >
                  //         Other todo
                  //       </Link>
                  //     </div>
                  //     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  //       {accessToken && (
                  //         <div>
                  //           <button
                  //             id="dropdownDelayButton"
                  //             onClick={() => this.hdlOnClickUser()}
                  //             className=""
                  //           >
                  //             <img
                  //               className="avatar"
                  //               src={user.avatar}
                  //               alt={user.name}
                  //             />
                  //           </button>

                  //           <div
                  //             id="dropdownDelay"
                  //             style={{ zIndex: 1000, position: "fixed" }}
                  //             className={`${
                  //               this.state.showUserInfo ? "" : "hidden"
                  //             } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                  //           >
                  //             <ul
                  //               className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  //               aria-labelledby="dropdownDelayButton"
                  //             >
                  //               <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  //                 Dashboard
                  //               </li>

                  //               <li
                  //                 onClick={() => {
                  //                   this.hdlOnClickUser();
                  //                   authContextState.signOut();

                  //                   history.push("/new-route");
                  //                 }}
                  //                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  //               >
                  //                 logout
                  //               </li>
                  //             </ul>
                  //           </div>
                  //         </div>
                  //       )}
                  //       {!accessToken && (
                  //         <Link
                  //           to="/login"
                  //           className="text-sm font-semibold leading-6 "
                  //           style={{
                  //             color: "crimson",
                  //             fontFamily: "monospace",
                  //             fontWeight: "bold",
                  //             backgroundColor: "white",
                  //             padding: "6px",
                  //             borderRadius: "20%",
                  //             border: "1px solid crimson",
                  //           }}
                  //         >
                  //           login
                  //         </Link>
                  //       )}

                  //       <ToggleThemeBtn></ToggleThemeBtn>
                  //     </div>
                  //   </nav>
                  // </header>
                  <NavigateToNewRoute
                    showUserInfo={this.state.showUserInfo}
                    hdlOnClickUser={this.hdlOnClickUser}
                    theme={theme}
                    authContextState={authContextState}
                  />
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
