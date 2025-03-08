import { Link } from "react-router-dom";

const CollaboratorCard = ({ item }: { item: any }) => {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4 px-6 flex flex-col">
      <div className=" w-full">
        <img src={`${item.image}`} alt="" className="object-cover" />
      </div>
      <h1 className="text text-[#305997] mb-2 text-center font-semibold text-lg">
        {item.name}
      </h1>
      <h3 className="text text-gray-700 mb-2 text-center font-semibold">
        {item.description}
      </h3>
      <h3 className="text text-gray-700 mb-6 text-center">
        <span className=" font-semibold text-[#305997]"> Key Expertise : </span>{" "}
        {item.expertise}
      </h3>
      <div className=" w-full flex items-center justify-center mb-7">
        <Link
          to={item.websiteLink}
          className="flex items-center justify-center rounded bg-gradient-to-br from-green-400 to-cyan-600"
        >
          <span className="flex items-center justify-center px-4 py-1 m-[2px] rounded bg-white hover:bg-transparent hover:text-white">
            Website
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CollaboratorCard;
