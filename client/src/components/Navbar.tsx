import { useRef } from "react";
import {
  faBars,
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { hiveImg, hiveNavbar } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  toggleMenu: () => void;
  toggleLogin: () => void;
}

const Navbar = ({ toggleMenu, toggleLogin }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
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
          <h1 className="login-btn" onClick={toggleLogin} >Log In</h1>
          <div className="nav-gray-hover-btn hidden max-sm:block">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="nav-gray-hover-btn">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
