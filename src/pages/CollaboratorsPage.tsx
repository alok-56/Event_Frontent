import NavBar from "../components/layout/NavBar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GetCollabarationApi } from "../Api/Admin/Collabaration";

const CollaboratorsPage = () => {
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<Event[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    GetEventsdata();
  }, []);

  const GetEventsdata = async () => {
    const response = await GetCollabarationApi();
    if (response.status) {
      setData(response.data);
    } else {
      setData([]);
    }
  };
  return (
    <div className="h-screen flex flex-col mt-10">
      <NavBar />
      <div
        className={`sm:w-11/12 sm:mx-auto mx-2  grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-1 py-32`}
      >
        {data &&
          data?.map((item, index) => (
            <FlipCard
              key={index}
              item={item}
              isFlipped={flippedIndex === index}
              onToggle={() =>
                setFlippedIndex(flippedIndex === index ? -1 : index)
              }
              isMobile={isMobile}
            />
          ))}
      </div>
    </div>
  );
};

const FlipCard = ({
  item,
  isFlipped,
  onToggle,
  isMobile,
}: {
  item: any;
  isFlipped: any;
  onToggle: any;
  isMobile: any;
}) => {
  console.log(item.Name)
  return (
    <motion.div
      className="flex items-center justify-center perspective-1000"
      onHoverStart={!isMobile ? onToggle : undefined}
      onHoverEnd={!isMobile ? onToggle : undefined}
      onClick={isMobile ? onToggle : undefined}
    >
      <motion.div
        className="relative w-[320px] h-[350px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >

        <div
          className="absolute w-full h-full flex justify-center items-center bg-white rounded-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={item.Image}
            alt=""
            className="h-[120px] object-contain p-[20px]"
          />
        </div>

        <div
          className="absolute w-full h-full flex flex-col justify-center items-center bg-gray-100 text-center px-4 py-6 rounded-lg"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          {item.Name && <h3 className="text-lg font-semibold">{item.Name}</h3>}
          {item.Title && (
            <p className="text-sm text-gray-500">{item.Title}</p>
          )}
          {item.Expertise && (
            <p className="text-sm mt-2 text-gray-700">
              <span className=" font-medium text-black">Expertise - </span>
              {item.Expertise}
            </p>
          )}
          {item.Role && (
            <p className="text-xs mt-2 text-gray-600">
              <span className=" font-medium text-black">Role - </span>
              {item.Role}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CollaboratorsPage;
