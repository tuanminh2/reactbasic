import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import ToggleThemeBtn from "../todolist/ToggleThemeBtn";
import { ThemeContext } from "../../context/ThemeContextProvider";
const Navbar = () => {
  const { user, accessToken, signOut } = useContext(AuthContext);
  const themeState = useContext(ThemeContext);

  const theme = themeState[themeState.active];

  return (
    <div>
      <nav
        style={{
          backgroundColor: theme["headerColor"],
          borderBottom: "2px solid crimson",
          color: theme["headerTextColor"],
        }}
        class="fixed top-0 z-50 w-full "
      >
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>

              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </div>
            <div class="" style={{ marginRight: "80px" }}>
              {accessToken && (
                <div class="flex items-center">
                  <strong>{user.name}</strong>
                  <div class="flex items-center ml-3">
                    <div>
                      <img
                        style={{
                          width: "30px",
                          height: "30px",

                          borderRadius: "50%",
                        }}
                        src={user.avatar}
                      />
                    </div>
                    <div
                      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="dropdown-user"
                    >
                      <div class="px-4 py-3" role="none">
                        <p
                          class="text-sm text-gray-900 dark:text-white"
                          role="none"
                        >
                          {user.username}
                        </p>
                      </div>
                      <ul class="py-1" role="none">
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div class="flex items-center">
                <ToggleThemeBtn></ToggleThemeBtn>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
