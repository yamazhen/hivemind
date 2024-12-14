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
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import LeftMenuButton from "./LeftMenuButton";
import { faHive } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import React from "react";
import api from "../utils/api";

interface Props {
  isVisible: boolean;
  isLoggedIn: boolean;
  openCreateHive: () => void;
  clickHive: (hive: Hive) => void;
  closeMenu: () => void;
}

interface Hive {
  _id: string;
  name: string;
  profilePic?: string;
  desc: string;
}

const Menu = ({
  isVisible,
  closeMenu,
  isLoggedIn,
  openCreateHive,
  clickHive,
}: Props) => {
  const [showMore, setShowMore] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [joinedHives, setJoinedHives] = useState<Hive[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, closeMenu]);

  useEffect(() => {
    const fetchJoinedHives = async () => {
      try {
        const { data } = await api.get("/api/users/myJoinedHives");
        setJoinedHives(data.joinedHives);
      } catch (error: any) {
        console.error(
          "Failed to fetch joined hives:",
          error.response?.data || error.message,
        );
      }
    };

    if (isLoggedIn) {
      fetchJoinedHives();
    }
  }, [isLoggedIn]);

  return (
    <>
      <div
        id="leftmenu"
        className={`menu ${isVisible ? "block" : "hidden"}`}
        ref={menuRef}
      >
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
                <LeftMenuButton onClick={openCreateHive} icon={faPlus}>
                  Create a Community
                </LeftMenuButton>
                {joinedHives.length > 0 &&
                  joinedHives.map((hive) => (
                    <LeftMenuButton
                      key={hive._id}
                      onClick={() => clickHive(hive)}
                      hiveProfile={`${hive.profilePic ? hive.profilePic : "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}`}
                    >
                      {`h/${hive.name}` as string}
                    </LeftMenuButton>
                  ))}
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
              <LeftMenuButton icon={faPersonCircleQuestion}>
                Help
              </LeftMenuButton>
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
      </div>
      {isVisible && (
        <span className="w-full block xl:hidden absolute bg-black h-full opacity-50" />
      )}
    </>
  );
};

export default Menu;
