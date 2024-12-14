import { faBell, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  hiveBanner: string;
  hiveProfile: string;
  hiveName: string;
}
const HiveBanner = ({ hiveName, hiveBanner, hiveProfile }: Props) => {
  return (
    <section className="px-4 mt-4">
      <img
        src={hiveBanner}
        alt="hiveBanner"
        className="w-full rounded-xl h-32 object-cover"
      />
      <div className="flex justify-between">
        <div className="mb-2">
          <img
            src={hiveProfile}
            alt="hiveProfile"
            className="absolute top-[150px] max-xl:left-[30px] xl:left-[310px] h-24 w-24 rounded-full object-cover border-black border-[4px]"
          />
          <h1 className="ml-[115px] max-xl:text-2xl text-3xl font-sans font-bold mt-5 tracking-wide">
            h/{hiveName}
          </h1>
        </div>
        <div className="flex mt-2 items-center gap-2 text-[14px]">
          <button className="px-4 h-10 border-white border rounded-full items-center place-items-center flex gap-2 text-center">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-zinc-100"
              size="lg"
            />
            Make a Post
          </button>
          <button className="w-10 h-10 border-white border rounded-full items-center place-items-center">
            <FontAwesomeIcon
              icon={faBell}
              className="text-zinc-100"
              size="lg"
            />
          </button>
          <button className="bg-hiveOrange-normal text-zinc-100 h-10 px-3 rounded-3xl font-sans tracking-wide hover:bg-hiveOrange-darker font-bold">
            Join
          </button>
          {/* Add Dropdown for Hive Options */}
        </div>
      </div>
    </section>
  );
};

export default HiveBanner;
