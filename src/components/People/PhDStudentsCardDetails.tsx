import { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { RxCross2 } from "react-icons/rx";

const PhDStudentsCardDetails = ({ item, setOpen }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = item.Image;
  }, [item.Image]);

  // function capitalizeWords(str: string) {
  //   return str
  //     .split("_")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(" ");
  // }

  return (
    <div className=" flex justify-center items-center fixed top-0 left-0 z-50 h-screen w-screen bg-black/70 ">
      <div
        className={`relative flex flex-col md:w-[60%] w-[95%] h-[500px] bg-white md:px-10 px-3 md:py-8 py-5 rounded-lg overflow-y-auto overflow-x-clip`}
      >
        <div className="md:flex justify-between mb-4">
          <div className="flex flex-col items-center mr-4">
            {!imageLoaded && (
              <BlurhashCanvas
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                punch={1}
                className="w-[150px] rounded-md"
              />
            )}
            {imageLoaded && (
              <img
                src={item.Image}
                alt="pic"
                className={`w-[150px] rounded-md`}
              />
            )}
            <div className=" text-center text-sm font-Roboto font-semibold mt-2 md:mb-0 mb-3">
              {item.Name}
            </div>
          </div>
          {item.About && (
            <div className=" font-Poppins w-[100%]">{item.About}</div>
          )}
        </div>
        {item?.Education?.length > 0 && (
          <div className=" mb-3">
            <div className=" font-Poppins font-bold mb-2">Education</div>
            <div className=" md:flex justify-between">
              <div>
                <ul className=" list-disc space-y-1 ml-3">
                  {item.Education &&
                    item.Education.map((Education: string, index: number) => (
                      <li key={index} className=" text-sm font-Poppins">
                        {Education}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {item?.Experience?.length > 0 && (
          <div className=" mb-3">
            <div className=" font-Poppins font-bold mb-2">Work Experience</div>
            <div className=" md:flex justify-between">
              <div>
                <ul className=" list-disc space-y-1 ml-3">
                  {item.Experience &&
                    item.Experience.map((Experience: string, index: number) => (
                      <li key={index} className=" text-sm font-Poppins">
                        {Experience}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {item?.Skills?.length > 0 && (
          <div className=" mb-3">
            <div className=" font-Poppins font-bold mb-2">Skills</div>
            <div className=" md:flex justify-between">
              <div>
                <ul className=" list-disc space-y-1 ml-3">
                  {item.Skills &&
                    item.Skills.map((Skills: string, index: number) => (
                      <li key={index} className=" text-sm font-Poppins">
                        {Skills}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {item?.Interest?.length > 0 && (
          <div className=" mb-3">
            <div className=" font-Poppins font-bold mb-2">Area of Interest</div>
            <div className=" md:flex justify-between">
              <div>
                <ul className=" list-disc space-y-1 ml-3">
                  {item.Interest &&
                    item.Interest.map((Interest: string, index: number) => (
                      <li key={index} className=" text-sm font-Poppins">
                        {Interest}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {item?.Awards?.length > 0 && (
          <div className=" mb-3">
            <div className=" font-Poppins font-bold mb-2">Awards</div>
            <div className=" md:flex justify-between">
              <div>
                <ul className=" list-disc space-y-1 ml-3">
                  {item.Awards &&
                    item.Awards.map((Awards: string, index: number) => (
                      <li key={index} className=" text-sm font-Poppins">
                        {Awards}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {item?.Patents?.length>0 && (
          <div className=" mb-3">
            <div className=" font-Poppins font-bold mb-2">Patents</div>
            <div className=" md:flex justify-between">
              <div>
                <ul className=" list-disc space-y-1 ml-3">
                  {item.Patents &&
                    item.Patents.map((Patents: string, index: number) => (
                      <li key={index} className=" text-sm font-Poppins">
                        {Patents}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {item?.exam?.length>0 && (
          <div>
            <div className=" font-Poppins font-bold mb-1">Exam Qualified</div>
            <div>
              {item.exam &&
                item.exam.map((exam: string, index: number) => (
                  <span key={index} className=" text-sm font-Poppins">
                    {exam} | &nbsp;
                  </span>
                ))}
            </div>
          </div>
        )}
        {item?.Links?.length>0 && (
          <div className="mt-4">
            <div className="font-Poppins font-bold mb-1">Associated Links</div>
            {item.Links.map((link: any, index: number) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="w-full text-sm font-Poppins space-y-2"
                key={index}
              >
                <span className="border-b-[1px] border-black hover:border-none">
                  {link}
                </span>
                <br />
              </a>
            ))}
          </div>
        )}

        <div
          className=" absolute right-3 top-3 bg-gray-400 rounded-sm cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <RxCross2 size={20} />
        </div>
      </div>
    </div>
  );
};

export default PhDStudentsCardDetails;
