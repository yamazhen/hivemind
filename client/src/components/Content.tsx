import { faBorderAll, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";

const Content = () => {
  return (
    <section className="flex-1 px-4">
      <div className="py-2 px-1 flex">
        <div className="content-filter-btns w-16">
          <p className="text-[12px]">Best</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="content-filter-btns w-14">
          <FontAwesomeIcon icon={faBorderAll} />
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <hr className="border-zinc-600"/>
      <Post />
      <hr className="border-zinc-600"/>
      <Post />
      <hr className="border-zinc-600"/>
      <Post />
      <hr className="border-zinc-600"/>
      <Post />
      <hr className="border-zinc-600"/>
      <Post />
      <hr className="border-zinc-600"/>
      <Post />
    </section>
  );
};

export default Content;
