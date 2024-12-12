import {
  faBorderAll,
  faCaretDown,
  faChevronLeft,
  faEllipsis,
  faPlus,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons/faShare";
import UserComment from "./UserComment";

interface Props {
  isInPost?: boolean;
  hiveProfile: string;
  postImage?: string;
}

const Content = ({ isInPost, hiveProfile, postImage }: Props) => {
  const userProfiles = {
    user1: "https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif",
    user2: "https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif",
  };
  if (isInPost) {
    return (
      <section className="flex-1 px-4">
        <div className="mt-8 flex justify-between">
          <div className="flex gap-2" id="left-top-post">
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="xs"
              className="bg-zinc-700 h-4 w-4 p-2 rounded-full hover:bg-zinc-600"
            />
            <img
              src={hiveProfile}
              alt="hiveProfile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div id="post-info" className="text-[10px] content-center">
              <div className="flex gap-2 text-[10px]">
                <p className="tracking-tighter font-semibold">h/meow</p>
                <p>•</p>
                <p className="font-extralight text-zinc-400">3 hr. ago</p>
              </div>
              <p>yamazhen</p>
            </div>
          </div>
          <div className="rounded-full hover:bg-zinc-700 flex content-center">
            <FontAwesomeIcon
              icon={faEllipsis}
              size="xs"
              className="h-4 w-4 p-2 "
            />
          </div>
        </div>
        <h1 className="mt-1 font-semibold font-sans text-2xl">Title</h1>
        <div className="aspect-[16/9] mt-4">
          <img
            src={postImage}
            alt="postImage"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="flex gap-2 font-sans text-sm items-center text-center mt-6">
          <div className="flex items-center bg-zinc-800 rounded-full gap-1 h-8">
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="sm"
              className="hover:bg-zinc-700 rounded-full hover:text-hiveOrange-normal transition-all p-3"
            />
            <p>434k</p>
            <FontAwesomeIcon
              icon={faThumbsDown}
              size="sm"
              className="hover:bg-zinc-700 hover:text-invertOrange-normal rounded-full transition-all p-3"
            />
          </div>
          <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 p-3 h-8">
            <FontAwesomeIcon icon={faMessage} size="sm" />
            <p>10</p>
          </div>
          <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 p-3 h-8">
            <FontAwesomeIcon icon={faShare} size="sm" />
            <p>Share</p>
          </div>
        </div>
        <div
          id="add-comment-btn"
          className="flex flex-row items-center content-center p-2 gap-2 border-zinc-700 border w-40 justify-center rounded-full mt-4 hover:border-zinc-300"
        >
          <FontAwesomeIcon icon={faPlus} />
          <p className="text-[14px]">Add Comment</p>
        </div>
        <div
          id="category-btn"
          className="flex flex-row mt-4 items-center gap-2"
        >
          <p className="text-[12px] text-zinc-400">Sort by:</p>
          <select
            name="comment-category"
            id="comment-category"
            className="appearance-none bg-zinc-950 px-4 py-1 text-center text-xs focus:ring-4 focus:ring-blue-500 border-zinc-700 border rounded-full"
          >
            <option value="top">Top</option>
            <option value="new">New</option>
          </select>
        </div>
        <UserComment userProfile={userProfiles.user1} />
        <UserComment userProfile={userProfiles.user1} />
        <UserComment userProfile={userProfiles.user1} />
        <UserComment userProfile={userProfiles.user1} />
      </section>
    );
  } else {
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
        />
        <hr className="border-zinc-600" />
        <Post hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif" />
        <hr className="border-zinc-600" />
        <Post hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif" />
        <hr className="border-zinc-600" />
        <Post hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif" />
        <hr className="border-zinc-600" />
        <Post hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif" />
        <hr className="border-zinc-600" />
        <Post
          hiveProfile="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
          image="https://wallpapers.com/images/featured/cat-background-b2las0zrosl6anik.jpg"
        />
      </section>
    );
  }
};

export default Content;
