import { partnersData } from "../../utils/data";

const Partners = () => {
  return (
    <div className="w-full bg-gray-300 py-3">
      <div
        className={`sm:w-11/12 sm:mx-auto mx-2 grid ${
          partnersData.length >= 5 ? "lg:grid-cols-5" : "grid-cols-auto"
        } md:grid-cols-3 gap-4 grid-cols-2`}
      >
        {partnersData &&
          partnersData.map((item, index) => (
            <div key={index} className=" flex items-center justify-center">
              <div className={`${index === 0 ? "w-48" : "w-32"}`}>
                <img src={item.img} alt="" className="object-contain w-full" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Partners;
