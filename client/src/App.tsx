import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useState } from "react";
import ContentMenu from "./components/ContentMenu";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }; 

  return (
    // TODO: add the left navigation bar, posts box, right side community discovery
    <main>
      <Navbar toggleMenu={toggleMenu}/>
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
