import {
  faArrowTrendUp,
  faCaretDown,
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
} from "@fortawesome/free-solid-svg-icons";
import LeftMenuButton from "./LeftMenuButton";
import { faHive } from "@fortawesome/free-brands-svg-icons";

interface Props {
  isVisible: boolean;
}

const Menu = ({isVisible}: Props) => {
  return (
    <section 
      id="leftmenu" 
      className={`menu ${isVisible ? 'block' : 'hidden'}`}
    >
      <div className="py-[16px] px-[16px] w-full">
        <LeftMenuButton active={true} icon={faHome}>Home</LeftMenuButton>
        <LeftMenuButton icon={faArrowTrendUp}>Popular</LeftMenuButton>
        <hr className="border-zinc-600 my-2.5" />
        <ul>
          <LeftMenuButton category={true} listicon={faCaretUp}>Topics</LeftMenuButton>
          <LeftMenuButton icon={faFaceLaugh} listicon={faCaretDown}>Internet Culture (Viral)</LeftMenuButton>
          <LeftMenuButton icon={faGamepad} listicon={faCaretDown}>Games</LeftMenuButton>
          <LeftMenuButton icon={faQuestion} listicon={faCaretDown}>Q&As</LeftMenuButton>
          <LeftMenuButton icon={faMicrochip} listicon={faCaretDown}>Technology</LeftMenuButton>
          <LeftMenuButton icon={faStar} listicon={faCaretDown}>Pop Culture</LeftMenuButton>
          <LeftMenuButton icon={faFilm} listicon={faCaretDown}>Movie & TV</LeftMenuButton>
          <p className="ml-2 my-1 py-2 hover:bg-zinc-800 w-[80px] text-[11px] whitespace-nowrap text-center rounded-3xl hover:text-zinc-100 transition-all">See more</p>
        </ul>
        <hr className="border-zinc-600 my-2.5" />
        <ul>
          <LeftMenuButton category={true} listicon={faCaretUp}>Resources</LeftMenuButton>
          <li><LeftMenuButton icon={faQuestionCircle}>About Hivemind</LeftMenuButton></li>
          <li><LeftMenuButton icon={faRectangleAd}>Advertise</LeftMenuButton></li>
          <li><LeftMenuButton icon={faPersonCircleQuestion}>Help</LeftMenuButton></li>
        </ul>
        <hr className="border-zinc-600 my-2.5"/>
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
