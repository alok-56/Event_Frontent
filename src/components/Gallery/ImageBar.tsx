import {useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ImageBar = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const minScrollPosition = 0;
      if (sliderRef.current.scrollLeft <= minScrollPosition) {
        sliderRef.current.scrollLeft =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      } else {
        sliderRef.current.scrollLeft -= 350;
      }
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const maxScrollPosition =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      if (sliderRef.current.scrollLeft >= maxScrollPosition) {
        sliderRef.current.scrollLeft = 0;
      } else {
        sliderRef.current.scrollLeft += 350;
      }
    }
  };

  return (
    <div className="relative flex items-center w-11/12 mx-auto select-none">
      <MdChevronLeft
        className="text-gray-500 hidden sm:block cursor-pointer hover:text-[#0f2444]"
        onClick={slideLeft}
        size={40}
      />
      {/* <div
              ref={sliderRef}
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar '
          >
              {imageData && imageData.map((item :any,index:any) => (
                  <img
                      className='sm:w-[350px] w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                      src={item.image}
                      alt=''
                      key={index}
                  />
              ))}
          </div> */}
      <MdChevronRight
        className="text-gray-500 hidden sm:block cursor-pointer hover:text-[#0f2444]"
        onClick={slideRight}
        size={40}
      />
    </div>
  );
};

export default ImageBar;
