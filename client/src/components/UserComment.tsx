import {
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  userProfile: string;
}

const UserComment = ({ userProfile }: Props) => {
  return (
    <section id="comment" className="mt-4">
      <div
        id="comment-top-part"
        className="flex gap-2 items-center text-[12px]"
      >
        <img
          src={userProfile}
          alt="profilePicture"
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="font-sans">yamazhen</p>
        <div className="text-[10px] text-zinc-400 flex gap-1">
          <p>•</p>
          <p className="font-extralight text-zinc-400">3 hr. ago</p>
          <p>•</p>
        </div>
      </div>
      <p className="font-sans text-[14px] mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex gap-2 font-sans text-sm items-center text-center my-2">
        <div className="flex items-center gap-1 h-8 content-center">
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="sm"
            className="hover:bg-zinc-700 rounded-full hover:text-hiveOrange-normal transition-all p-2"
          />
          <p className="text-[10px]">0</p>
          <FontAwesomeIcon
            icon={faThumbsDown}
            size="sm"
            className="hover:bg-zinc-700 hover:text-invertOrange-normal rounded-full transition-all p-2"
          />
        </div>
        <div className="flex items-center gap-1 hover:bg-zinc-700 p-2 rounded-full h-7">
          <FontAwesomeIcon icon={faShare} size="sm" />
          <p>Share</p>
        </div>
      </div>
    </section>
  );
};
export default UserComment;
