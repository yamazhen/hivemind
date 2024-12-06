import PopularCommunities from "./PopularCommunities";

interface Props {
  isLoggedIn: boolean;
}

const RightContentMenu = ({ isLoggedIn }: Props) => {
  return (
    <section className="hidden pt-10 pl-2 pr-6 lg:flex w-1/3 xl:w-1/4 h-full items-center justify-center xl:justify-start">
      {!isLoggedIn && (
        <div className="w-[275px] bg-black rounded-md px-4 py-2 text-zinc-300">
          <h1 className="my-[12px] uppercase text-[12px] tracking-widest">
            Popular Communities
          </h1>
          <PopularCommunities members={10020039} hive="Cooking" />
          <PopularCommunities members={9003009} hive="Swimming" />
          <PopularCommunities members={9001006} hive="Gaming" />
          <PopularCommunities members={8901436} hive="Korea" />
          <PopularCommunities members={61201} hive="Malaysia" />
          <PopularCommunities members={100} hive="Fishing" />
        </div>
      )}
    </section>
  );
};

export default RightContentMenu;
