import {
  faEllipsis,
  faMessage,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  image?: string;
  hiveProfile: string;
  postTitle: string;
  postContent?: string;
  clickPost: () => void;
}

const Post = ({
  image,
  hiveProfile,
  postTitle,
  postContent,
  clickPost,
}: Props) => {
  if (image != undefined) {
    return (
      <section
        className="hover:bg-zinc-900 h-auto py-[4px] px-[16px] rounded-3xl my-1 cursor-pointer"
        onClick={clickPost}
      >
        <div className="flex justify-between mb-1">
          <div className="flex items-center gap-1 justify-center text-center">
            <img
              src={hiveProfile}
              alt="image"
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="text-[12px] font-normal">h/meow</p>
            <p className="text-[10px] font-extralight">• 1 hr. ago</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEllipsis}
              size="sm"
              className="py-2 px-2.5 rounded-full hover:bg-zinc-800"
            />
          </div>
        </div>
        <div className="font-sans mb-[16px]">
          <h1 className="font-normal text-lg mb-[8px]">{postTitle}</h1>
          <img src={image} alt="image" className="w-full rounded-lg" />
        </div>
        <div className="flex gap-2 font-sans text-sm items-center text-center mb-2">
          <div className="flex items-center bg-zinc-800 rounded-full gap-1">
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="sm"
              className="hover:bg-zinc-700 rounded-full hover:text-hiveOrange-normal transition-all px-2 py-2"
            />
            <p>434k</p>
            <FontAwesomeIcon
              icon={faThumbsDown}
              size="sm"
              className="hover:bg-zinc-700 hover:text-invertOrange-normal rounded-full transition-all px-2 py-2"
            />
          </div>
          <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 px-2 py-1">
            <FontAwesomeIcon icon={faMessage} size="sm" />
            <p>10</p>
          </div>
          <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 px-2 py-1">
            <FontAwesomeIcon icon={faShare} size="sm" />
            <p>Share</p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="hover:bg-zinc-900 h-auto py-[4px] px-[16px] rounded-3xl my-1 cursor-pointer">
        <div className="flex justify-between mb-1">
          <div className="flex items-center gap-1 justify-center text-center">
            <img
              src={hiveProfile}
              alt="hiveProfile"
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="text-[12px] font-normal">h/meow</p>
            <p className="text-[10px] font-extralight">• 1 hr. ago</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEllipsis}
              size="sm"
              className="py-2 px-2.5 rounded-full hover:bg-zinc-800"
            />
          </div>
        </div>
        <div className="font-sans mb-4">
          <h1 className="font-normal text-xl leading-tight w-[700px] break-words mb-2">
            {postTitle}
          </h1>
          <p className="font-light text-sm truncate w-[700px] max-sm:hidden">
            {postContent}
          </p>
        </div>
        <div className="flex gap-2 font-sans text-sm items-center text-center mb-2">
          <div className="flex items-center bg-zinc-800 rounded-full gap-1">
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="sm"
              className="hover:bg-zinc-700 rounded-full hover:text-hiveOrange-normal transition-all px-2 py-2"
            />
            <p>434k</p>
            <FontAwesomeIcon
              icon={faThumbsDown}
              size="sm"
              className="hover:bg-zinc-700 hover:text-invertOrange-normal rounded-full transition-all px-2 py-2"
            />
          </div>
          <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 px-2 py-1">
            <FontAwesomeIcon icon={faMessage} size="sm" />
            <p>10</p>
          </div>
          <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 px-2 py-1">
            <FontAwesomeIcon icon={faShare} size="sm" />
            <p>Share</p>
          </div>
        </div>
      </section>
    );
  }
};

export default Post;
