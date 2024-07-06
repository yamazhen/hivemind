import { useRef } from "react";
import {
  faBars,
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { hiveImg, hiveNavbar } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  toggleMenu: () => (void);
}

const Navbar = ({ toggleMenu }: Props) => {
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
          <FontAwesomeIcon
            icon={faBars}
            className="nav-gray-hover-btn xl:hidden"
            onClick={toggleMenu}
          />
          <img
            src={hiveImg}
            alt="Hivemind"
            width={30}
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
          <h1 className="login-btn">Log In</h1>
          <FontAwesomeIcon icon={faEllipsis} className="nav-gray-hover-btn" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
