import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  hive: string;
  members: number;
}

const PopularCommunities = ({ hive, members }: Props) => {
  const formattedMembers = members.toLocaleString();

  return (
    <div className="flex items-center gap-3 p-2 cursor-pointer">
      <FontAwesomeIcon icon={faCircleUser} className="text-3xl" />
      <div className="flex-col">
        <h1 className="text-sm">h/{hive}</h1>
        <p className="text-xs text-zinc-400">{formattedMembers} Members</p>
      </div>
    </div>
  );
};

export default PopularCommunities;
