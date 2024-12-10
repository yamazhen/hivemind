import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import RightContentMenu from "./components/RightContentMenu";
import HiveBanner from "./components/HiveBanner";

function App() {
  /*const [isLoggedIn, setIsLoggedIn] = useState(false);*/
  /*const [isInHive, setIsInHive] = useState(false);*/
  const isInHive = false;
  const isLoggedIn = false;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginMenuVisible, setIsLoginMenuVisible] = useState(false);
  const [isEllipsisVisible, setIsEllipsisVisible] = useState(false);

  const toggleLoginMenu = () => {
    setIsLoginMenuVisible(!isLoginMenuVisible);
  };
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const toggleEllipsis = () => {
    setIsEllipsisVisible(!isEllipsisVisible);
  };

  useEffect(() => {
    if (isLoginMenuVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isLoginMenuVisible]);
  useEffect(() => {
    if (isEllipsisVisible) {
      setIsMenuVisible(false);
    }
  }, [isEllipsisVisible]);
  return (
    // TODO add the left navigation bar, posts box, right side community discovery
    <main id="main">
      <Login visible={isLoginMenuVisible} onClose={toggleLoginMenu} />
      <Navbar
        toggleMenu={toggleMenu}
        toggleLogin={toggleLoginMenu}
        closeLeftMenu={toggleEllipsis}
      />
      <span className="block h-[57px]"></span>
      <Menu isVisible={isMenuVisible} isLoggedIn={isLoggedIn} />
      {isMenuVisible && (
        <span
          className="w-full block xl:hidden absolute bg-black h-full opacity-50"
          onClick={toggleMenu}
        />
      )}
      <section className="flex flex-col">
        {isInHive ? (
          <>
            <HiveBanner
              hiveBanner="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4289aa2d-f7a1-4557-a4ce-bddc7171d31f/dfzydb3-fec9e716-17e2-4582-a28b-a2f9923e3b79.jpg/v1/fill/w_1280,h_356,q_75,strp/neon_landscape_ultrawide_wallpaper_by_ultrawidewalls_dfzydb3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvNDI4OWFhMmQtZjdhMS00NTU3LWE0Y2UtYmRkYzcxNzFkMzFmXC9kZnp5ZGIzLWZlYzllNzE2LTE3ZTItNDU4Mi1hMjhiLWEyZjk5MjNlM2I3OS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.AWHwmWFwNw5o0Ncd0WEswZOyfNAy5FsReBp1GLChGn8"
              hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
            />
            <div className="flex">
              <span className="hidden xl:block md:w-1/3 lg:w-[300px] h-full"></span>
              <Content />
              <RightContentMenu
                isInHive={isInHive}
                clickHive={() => setIsInHive(isInHive)}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex">
              <span className="hidden xl:block md:w-1/3 lg:w-[300px] h-full"></span>
              <Content />
              <RightContentMenu isLoggedIn={isLoggedIn} />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
