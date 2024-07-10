import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import ContentMenu from "./components/ContentMenu";
import Login from "./components/Login";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginMenuVisible, setIsLoginMenuVisible] = useState(false);

  const toggleLoginMenu = () => {
    setIsLoginMenuVisible(!isLoginMenuVisible);
  }
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }; 

  useEffect(() => {
    if(isLoginMenuVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isLoginMenuVisible]);

  return (
    // TODO: add the left navigation bar, posts box, right side community discovery
    <main id="main" className="overflow-y-hidden">
      <Login visible={isLoginMenuVisible} onClose={toggleLoginMenu}/>
      <Navbar toggleMenu={toggleMenu} toggleLogin={toggleLoginMenu}/>
      <span className="block h-[57px]"></span> 
      <section className="flex">
        <Menu isVisible={isMenuVisible}/>
        { isMenuVisible && <span className="w-full block xl:hidden absolute bg-black h-full opacity-50"/>}
        <span className="hidden xl:block md:w-1/3 lg:w-1/4 h-full"></span>
        <Content />
        <ContentMenu />
      </section>
    </main>
  );
}

export default App;
