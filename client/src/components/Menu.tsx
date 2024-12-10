import {
  faArrowTrendUp,
  faFaceLaugh,
  faFilm,
  faGamepad,
  faHome,
  faMicrochip,
  faQuestion,
  faStar,
  faCaretUp,
  faQuestionCircle,
  faRectangleAd,
  faPersonCircleQuestion,
  faHourglass,
  faBook,
  faScaleBalanced,
  faScroll,
  faHandshake,
  faMagnifyingGlassPlus,
  faGlobe,
  faPaintBrush,
  faBookSkull,
} from "@fortawesome/free-solid-svg-icons";
import LeftMenuButton from "./LeftMenuButton";
import { faHive } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

interface Props {
  isVisible: boolean;
  isLoggedIn: boolean;
}

const Menu = ({ isVisible, isLoggedIn }: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="leftmenu" className={`menu ${isVisible ? "block" : "hidden"}`}>
      <div className="py-[16px] px-[16px] w-full">
        <LeftMenuButton active={true} icon={faHome}>
          Home
        </LeftMenuButton>
        <LeftMenuButton icon={faArrowTrendUp}>Popular</LeftMenuButton>
        {isLoggedIn ? (
          <>
            <LeftMenuButton icon={faMagnifyingGlassPlus}>
              Explore
            </LeftMenuButton>
            <LeftMenuButton icon={faGlobe}>All</LeftMenuButton>
            <hr className="border-zinc-600 my-2.5" />
            <ul>
              <LeftMenuButton category={true} listicon={faCaretUp}>
                Recent
              </LeftMenuButton>
              {/* hive buttons */}
              <LeftMenuButton hiveProfile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTGI0vO83mYNefqgTxdktvrBt-fRabdydNw&s">
                h/Meow
              </LeftMenuButton>
              <LeftMenuButton hiveProfile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7rEMddM-ZtHesWPtal57_zxw-TSdLMjFsw&s">
                h/meow
              </LeftMenuButton>
              <LeftMenuButton hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif">
                h/meow
              </LeftMenuButton>
            </ul>
            <hr className="border-zinc-600 my-2.5" />
            <ul>
              <LeftMenuButton category={true} listicon={faCaretUp}>
                Communities
              </LeftMenuButton>
              {/* hive buttons */}
              <LeftMenuButton hiveProfile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTGI0vO83mYNefqgTxdktvrBt-fRabdydNw&s">
                h/Meow
              </LeftMenuButton>
              <LeftMenuButton hiveProfile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7rEMddM-ZtHesWPtal57_zxw-TSdLMjFsw&s">
                h/meow
              </LeftMenuButton>
              <LeftMenuButton hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif">
                h/meow
              </LeftMenuButton>
            </ul>
          </>
        ) : (
          <>
            <hr className="border-zinc-600 my-2.5" />
            <ul>
              <LeftMenuButton category={true} listicon={faCaretUp}>
                Topics
              </LeftMenuButton>
              <LeftMenuButton icon={faFaceLaugh}>
                Internet Culture (Viral)
              </LeftMenuButton>
              <LeftMenuButton icon={faGamepad}>Games</LeftMenuButton>
              <LeftMenuButton icon={faQuestion}>Q&As</LeftMenuButton>
              <LeftMenuButton icon={faMicrochip}>Technology</LeftMenuButton>
              {/* extra buttons that will be hidden and visible when see more is clicked */}
              {showMore && (
                <>
                  <LeftMenuButton icon={faStar}>Pop Culture</LeftMenuButton>
                  <LeftMenuButton icon={faFilm}>Movie & TV</LeftMenuButton>
                  <LeftMenuButton icon={faBookSkull}>Anime</LeftMenuButton>
                  <LeftMenuButton icon={faPaintBrush}>Art</LeftMenuButton>
                </>
              )}
              <p
                className="ml-2 my-1 py-2 hover:bg-zinc-800 w-[80px] text-[11px] whitespace-nowrap text-center rounded-3xl hover:text-zinc-100 transition-all"
                onClick={() => setShowMore(!showMore)}
              >
                See more
              </p>
            </ul>
          </>
        )}
        <hr className="border-zinc-600 my-2.5" />
        <ul>
          <LeftMenuButton category={true} listicon={faCaretUp}>
            Resources
          </LeftMenuButton>
          <li>
            <LeftMenuButton icon={faQuestionCircle}>
              About Hivemind
            </LeftMenuButton>
          </li>
          <li>
            <LeftMenuButton icon={faRectangleAd}>Advertise</LeftMenuButton>
          </li>
          <li>
            <LeftMenuButton icon={faPersonCircleQuestion}>Help</LeftMenuButton>
          </li>
        </ul>
        <hr className="border-zinc-600 my-2.5" />
        <LeftMenuButton icon={faHive}>Communities</LeftMenuButton>
        <LeftMenuButton icon={faHourglass}>Best of Hivemind</LeftMenuButton>
        <LeftMenuButton icon={faBook}>Topics</LeftMenuButton>
        <hr className="border-zinc-600 my-2.5" />
        <LeftMenuButton icon={faScroll}>Content Policy</LeftMenuButton>
        <LeftMenuButton icon={faScaleBalanced}>Privacy Policy</LeftMenuButton>
        <LeftMenuButton icon={faHandshake}>User Agreement</LeftMenuButton>
      </div>
    </section>
  );
};

export default Menu;
