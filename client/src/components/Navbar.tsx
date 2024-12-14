import { useEffect, useRef, useState, useCallback } from "react";
import {
  faBars,
  faEllipsis,
  faMagnifyingGlass,
  faRightToBracket,
  faRectangleAd,
  faBell,
  faPlus,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { hiveImg, hiveNavbar } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";

interface Props {
  toggleMenu: () => void;
  toggleLogin: () => void;
  isLoggedIn: boolean;
  userProfilePic?: string;
  logout: () => void;
  createHive?: () => void;
  createPost?: () => void;
  goHome?: () => void;
}

const Navbar = ({
  toggleMenu,
  toggleLogin,
  isLoggedIn,
  userProfilePic,
  logout,
  createPost,
  goHome,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ellipsisDropdownRef = useRef<HTMLUListElement>(null);
  const loggedInDropdownRef = useRef<HTMLUListElement>(null);
  const ellipsisToggleRef = useRef<HTMLDivElement>(null);
  const userProfileToggleRef = useRef<HTMLImageElement>(null);

  const [isEllipsisMenuVisible, setIsEllipsisMenuVisible] = useState(false);
  const [isLoggedInDropdownVisible, setIsLoggedInDropdownVisible] =
    useState(false);

  const toggleDropdown = useCallback(
    (dropdownRef: React.RefObject<HTMLUListElement>, isVisible: boolean) => {
      gsap.to(dropdownRef.current, {
        opacity: isVisible ? 1 : 0,
        display: isVisible ? "flex" : "none",
        duration: isVisible ? 0.2 : 0,
      });
    },
    [],
  );

  const toggleEllipsisMenu = useCallback(() => {
    const newState = !isEllipsisMenuVisible;
    setIsEllipsisMenuVisible(newState);
    toggleDropdown(ellipsisDropdownRef, newState);
  }, [isEllipsisMenuVisible, toggleDropdown]);

  const toggleLoggedInDropdown = useCallback(() => {
    const newState = !isLoggedInDropdownVisible;
    setIsLoggedInDropdownVisible(newState);
    toggleDropdown(loggedInDropdownRef, newState);
  }, [isLoggedInDropdownVisible, toggleDropdown]);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;

      const isClickInsideEllipsis =
        ellipsisDropdownRef.current?.contains(target) ||
        ellipsisToggleRef.current?.contains(target);
      const isClickInsideLoggedIn =
        loggedInDropdownRef.current?.contains(target) ||
        userProfileToggleRef.current?.contains(target);

      if (!isClickInsideEllipsis && isEllipsisMenuVisible) {
        setIsEllipsisMenuVisible(false);
        toggleDropdown(ellipsisDropdownRef, false);
      }

      if (!isClickInsideLoggedIn && isLoggedInDropdownVisible) {
        setIsLoggedInDropdownVisible(false);
        toggleDropdown(loggedInDropdownRef, false);
      }
    },
    [isEllipsisMenuVisible, isLoggedInDropdownVisible, toggleDropdown],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    gsap.set(ellipsisDropdownRef.current, { opacity: 0, display: "none" });
    gsap.set(loggedInDropdownRef.current, { opacity: 0, display: "none" });
  }, []);

  const handleLogout = () => {
    if (isEllipsisMenuVisible) {
      setIsEllipsisMenuVisible(false);
      toggleDropdown(ellipsisDropdownRef, false);
    }
    if (isLoggedInDropdownVisible) {
      setIsLoggedInDropdownVisible(false);
      toggleDropdown(loggedInDropdownRef, false);
    }

    logout();
  };

  return (
    <header className="px-2 flex fixed w-full bg-zinc-950 z-20">
      <nav className="navbar">
        <div
          className="flex pl-2 gap-2 pr-8 items-center cursor-pointer"
          onClick={goHome}
        >
          <div
            className="nav-gray-hover-btn xl:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <img
            src={hiveImg}
            alt="Hivemind Logo"
            width={28}
            className="hidden max-lg:block"
          />
          <img
            src={hiveNavbar}
            alt="Hivemind"
            width={160}
            className="hidden lg:block"
          />
        </div>
        <div className="search-bar" onClick={handleIconClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-zinc-100" />
          <input
            type="text"
            placeholder="Search Hivemind"
            className="search-input"
            ref={inputRef}
          />
        </div>
        {/* Right side */}
        {isLoggedIn ? (
          <div className="flex items-center pr-2">
            <button
              className="h-10 px-3 hover:bg-zinc-800 rounded-full items-center text-[14px] flex gap-2 max-lg:hidden"
              onClick={createPost}
            >
              <FontAwesomeIcon icon={faPlus} className="text-zinc-100" />
              Create
            </button>
            <div className="nav-gray-hover-btn">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="relative inline-block">
              <img
                src={userProfilePic}
                alt="User Profile"
                className={`h-9 w-9 rounded-full ml-2 cursor-pointer ${
                  isLoggedInDropdownVisible ? "border-blue-500 border-2" : ""
                }`}
                onClick={toggleLoggedInDropdown}
                aria-expanded={isLoggedInDropdownVisible}
              />
              <ul
                ref={loggedInDropdownRef}
                className="absolute right-0 mt-2 w-64 bg-zinc-900 rounded-lg shadow-xl text-left font-sans font-light p-6 flex flex-col gap-6 tracking-wide text-zinc-300"
              >
                <li
                  className="dropdown-btn"
                  onClick={handleLogout}
                  aria-label="Log Out"
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  <p className="text-sm">Log Out</p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 justify-center text-center pl-8 items-center pr-2">
            <h1 className="login-btn" onClick={toggleLogin} aria-label="Log In">
              Log In
            </h1>
            <div className="nav-gray-hover-btn hidden max-sm:block">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="relative inline-block">
              <button
                className="nav-gray-hover-btn"
                onClick={toggleEllipsisMenu}
                aria-expanded={isEllipsisMenuVisible}
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
              <ul
                ref={ellipsisDropdownRef}
                className="absolute right-0 mt-2 w-64 bg-zinc-900 rounded-lg shadow-xl text-left font-sans font-light p-6 flex flex-col gap-6 tracking-wide text-zinc-300"
              >
                <li className="dropdown-btn" onClick={toggleLogin}>
                  <FontAwesomeIcon icon={faRightToBracket} />
                  <p className="text-sm">Log In / Sign Up</p>
                </li>
                <li className="dropdown-btn">
                  <FontAwesomeIcon icon={faRectangleAd} />
                  <p className="text-sm">Advertise on Hivemind</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
