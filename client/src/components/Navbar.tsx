import { useEffect, useRef, useState } from "react";
import {
  faBars,
  faEllipsis,
  faMagnifyingGlass,
  faRightToBracket,
  faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";
import { hiveImg, hiveNavbar } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";

interface Props {
  toggleMenu: () => void;
  toggleLogin: () => void;
  closeLeftMenu: () => void;
}

// BUG: ellipsis dropdown menu persists even after clicking other elements

const Navbar = ({ toggleMenu, toggleLogin, closeLeftMenu }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const [isEllipsisMenuVisible, setIsEllipsisMenuVisible] = useState(false);
  const toggleEllipsisMenu = () => {
    setIsEllipsisMenuVisible(!isEllipsisMenuVisible);
    if (!isEllipsisMenuVisible) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        duration: 0.2,
        display: "flex",
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        duration: 0,
        onComplete: () => {
          if (dropdownRef.current) {
            dropdownRef.current.style.display = "none";
          }
        },
      });
    }
  };

  useEffect(() => {
    if (!isEllipsisMenuVisible) {
      gsap.set(dropdownRef.current, { opacity: 0, display: "none" });
    }
  }, []);

  return (
    <header className="px-2 flex fixed w-full bg-zinc-950 z-20">
      <nav className="navbar">
        <div className="flex pl-2 gap-2 pr-8 items-center">
          <div className="nav-gray-hover-btn xl:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <img
            src={hiveImg}
            alt="Hivemind"
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
        <div className="flex gap-3 justify-center text-center pl-8 items-center pr-2">
          <h1 className="login-btn" onClick={toggleLogin}>
            Log In
          </h1>
          <div className="nav-gray-hover-btn hidden max-sm:block">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="relative inline-block" onClick={closeLeftMenu}>
            <div className="nav-gray-hover-btn" onClick={toggleEllipsisMenu}>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
            <ul
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-64 bg-zinc-900 rounded-lg shadow-xl text-left font-sans font-light p-6 flex flex-col gap-6 tracking-wide text-zinc-300 cursor-pointer"
            >
              <li className="hover:text-zinc-50 flex items-center gap-4">
                <FontAwesomeIcon icon={faRightToBracket} />
                <p className="text-sm">Log In / Sign Up</p>
              </li>
              <li className="hover:text-zinc-50 flex items-center gap-4">
                <FontAwesomeIcon icon={faRectangleAd} />
                <p className="text-sm">Advertise on Hivemind</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
