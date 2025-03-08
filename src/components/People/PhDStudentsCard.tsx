import { useEffect, useState } from "react";
import PhDStudentsCardDetails from "./PhDStudentsCardDetails.tsx";
import { BlurhashCanvas } from "react-blurhash";

const PhDStudentsCard = ({ item }: any) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = item.Image;
  }, [item.Image]);
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col rounded-lg select-none h-full mt-10">
      <div className="bg-[#4F75FF] h-[130px] relative rounded-t-lg">
        <div className="absolute top-[50%] w-full flex justify-center">
          {!imageLoaded && (
            <BlurhashCanvas
              hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              punch={1}
              className="h-[120px] w-[120px] rounded-full object-cover border-8 border-white"
            />
          )}
          {imageLoaded && (
            <img
              src={item?.Image}
              alt="pic 1"
              className="h-[120px] w-[120px] rounded-full object-cover border-8 border-white"
            />
          )}
        </div>
      </div>
      <div className="h-[50px] bg-white"></div>
      <div className="flex flex-col px-6 justify-center items-center font-Poppins py-6 flex-grow">
        <div className="text-[#4F75FF]">{item.Name}</div>
        {item.Title && (
          <div className="text-sm text-gray-500 mb-3">{item.Title}</div>
        )}
        {item.LastDate && (
          <div className="text-sm text-gray-500 mb-3">{item.LastDate}</div>
        )}
        {item.place && (
          <div className="text-sm text-center text-gray-500 mb-3">
            {item.place}
          </div>
        )}
        {item?.Research && (
          <div className="text-center mb-2">
            <span className="text-[#4F75FF]">Research Area -</span>{" "}
            {item.Research}
          </div>
        )}
        {item?.others?.researchExperience && (
          <div className="text-center mb-2">
            <span className="text-[#4F75FF]">Research Experience -</span>{" "}
            {item.others?.researchExperience.map((exp: any, index: any) => (
              <div key={index}>{exp}</div>
            ))}
          </div>
        )}
        {item?.Role && (
          <div className="text-center mb-2">
            <span className="text-[#4F75FF]">Project Role -</span> {item.Role}
          </div>
        )}
        <div className="text-center mb-8">
          <span className="text-[#4F75FF]">Email -</span> {item?.Email}
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-auto mb-[20px]">
        <div
          className="bg-[#4F75FF] rounded-lg py-1.5 w-full text-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <button className="text-white">View Profile</button>
        </div>
      </div>
      {open && <PhDStudentsCardDetails item={item} setOpen={setOpen} />}
    </div>
  );
};

export default PhDStudentsCard;
