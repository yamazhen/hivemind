import { faEllipsis, faMessage, faShare, faThumbsDown, faThumbsUp, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = () => {
  // TODO: add the interaction section (like dislike comment) also find a way to limit the amount of text in the content
  return (
    <section className="hover:bg-zinc-900 h-auto py-[4px] px-[16px] rounded-3xl my-1">
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-1 justify-center text-center">
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <p className="text-[12px] font-normal">u/yamazhen</p>
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
        <h1 className="font-normal text-lg mb-[8px]">
          The Evolution of Video Games: From Pong to Virtual Reality
        </h1>
        <p className="font-light text-sm max-sm:hidden">
          Video games have come a long way since their inception in the early
          1970s. What started as simple pixelated games on arcade machines has
          now transformed into a multibillion-dollar industry featuring complex
          narratives, stunning graphics, and immersive experiences. In this
          post, I want to take you on a journey through the evolution of video
          games, highlighting key milestones and reflecting on how far we've
          come.
        </p>
      </div>
      <div className="flex gap-2 font-sans text-sm items-center text-center">
        <div className="flex items-center bg-zinc-800 rounded-full gap-1">
          <FontAwesomeIcon icon={faThumbsUp} size="sm" className="hover:bg-zinc-700 rounded-full hover:text-hiveOrange-normal transition-all px-2 py-2"/>
          <p>434k</p>
          <FontAwesomeIcon icon={faThumbsDown} size="sm" className="hover:bg-zinc-700 hover:text-invertOrange-normal rounded-full transition-all px-2 py-2"/>
        </div>
        <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 px-2 py-1">
          <FontAwesomeIcon icon={faMessage} size="sm"/>
          <p>10</p>
        </div>
        <div className="flex items-center bg-zinc-800 rounded-full gap-1 hover:bg-zinc-700 px-2 py-1">
          <FontAwesomeIcon icon={faShare}/>
          <p>Share</p>
        </div>
      </div>
    </section>
  );
};

export default Post;
