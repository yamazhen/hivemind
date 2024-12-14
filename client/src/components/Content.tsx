import { faBorderAll, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";

interface Props {
  clickPost: () => void;
}

const Content = ({ clickPost }: Props) => {
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
      <hr className="border-zinc-600" />
      <Post
        image="https://t4.ftcdn.net/jpg/06/81/34/29/360_F_681342927_XnHKRjZBQpDB5lL3dUs1Wd6ZgKnIlJVC.jpg"
        hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        postTitle="Title"
        clickPost={clickPost}
      />
      <hr className="border-zinc-600" />
      <Post
        hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        postTitle="Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua"
        postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        clickPost={clickPost}
      />
      <hr className="border-zinc-600" />
      <Post
        hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        postTitle="Title"
        postContent="Content"
        clickPost={clickPost}
      />
      <hr className="border-zinc-600" />
      <Post
        hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        postTitle="Title"
        postContent="Content"
        clickPost={clickPost}
      />
      <hr className="border-zinc-600" />
      <Post
        hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        postTitle="Title"
        postContent="Content"
        clickPost={clickPost}
      />
      <hr className="border-zinc-600" />
      <Post
        hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
        image="https://wallpapers.com/images/featured/cat-background-b2las0zrosl6anik.jpg"
        postTitle="Title"
        clickPost={clickPost}
      />
    </section>
  );
};

export default Content;
