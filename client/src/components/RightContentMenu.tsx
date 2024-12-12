import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopularCommunities from "./PopularCommunities";
import { faCake } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isLoggedIn?: boolean;
  isInHive?: boolean;
}

const RightContentMenu = ({ isLoggedIn, isInHive }: Props) => {
  if (!isLoggedIn && !isInHive) {
    return (
      <section className="hidden pt-10 pl-2 pr-6 lg:flex w-1/3 xl:w-1/4 h-full items-center justify-center xl:justify-start">
        <div className="w-[300px] bg-zinc-950 rounded-md px-4 py-2 text-zinc-300">
          <h1 className="my-[12px] uppercase text-[12px] tracking-widest">
            Popular Communities
          </h1>
          <PopularCommunities members={10020039} hive="meow" />
          <PopularCommunities members={9320039} hive="Cooking" />
          <PopularCommunities members={9003009} hive="Swimming" />
          <PopularCommunities members={9001006} hive="Gaming" />
          <PopularCommunities members={8901436} hive="Korea" />
          <PopularCommunities members={61201} hive="Malaysia" />
          <PopularCommunities members={100} hive="Fishing" />
        </div>
      </section>
    );
  } else if (isInHive) {
    return (
      <section className="hidden pt-10 pl-2 pr-6 lg:flex w-1/3 xl:w-1/4 h-full items-center justify-center xl:justify-start">
        <div className="w-[300px] bg-zinc-900 rounded-md px-4 py-2 text-xs font-mono flex flex-col gap-1">
          <h1 className="my-2 text-[12px] tracking-wider font-sans font-bold">
            Cat Community
          </h1>
          <p>A community for cat lovers</p>
          <p className="text-[10px] mb-2">
            <FontAwesomeIcon icon={faCake} className="mr-2" />
            Created Dec 11, 2024
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="hidden pt-10 pl-2 pr-6 lg:flex w-1/3 xl:w-1/4 h-full items-center justify-center xl:justify-start"></section>
    );
  }
};

export default RightContentMenu;
