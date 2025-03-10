import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  type CarouselApi,
} from "../../components/ui/carousel"
import { cn } from "../../lib/utils"
import { upComingEventsData } from "../../utils/data";
import Eventslide from "../Hero/UpdatesSlide"


// Sample data - replace with your actual data import


// const CountDown = ({ dateInt }: { dateInt: string }) => {
//   const [days, setDays] = useState(0)
//   const [hours, setHours] = useState(0)
//   const [minutes, setMinutes] = useState(0)
//   const [seconds, setSeconds] = useState(0)

//   useEffect(() => {
//     const target = new Date(dateInt)

//     const interval = setInterval(() => {
//       const now = new Date()
//       const difference = target.getTime() - now.getTime()

//       const d = Math.floor(difference / (1000 * 60 * 60 * 24))
//       setDays(d)

//       const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       setHours(h)

//       const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
//       setMinutes(m)

//       const s = Math.floor((difference % (1000 * 60)) / 1000)
//       setSeconds(s)
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [dateInt])

//   return (
//     <div className="flex gap-4 text-white">
//       <div className="flex flex-col items-center">
//         <div className="bg-black/40 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
//           {days}
//         </div>
//         <span className="text-sm mt-1">Days</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <div className="bg-black/40 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
//           {hours}
//         </div>
//         <span className="text-sm mt-1">Hours</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <div className="bg-black/40 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
//           {minutes}
//         </div>
//         <span className="text-sm mt-1">Minutes</span>
//       </div>
//       <div className="flex flex-col items-center">
//         <div className="bg-black/40 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
//           {seconds}
//         </div>
//         <span className="text-sm mt-1">Seconds</span>
//       </div>
//     </div>
//   )
// }

const UpComingEvents = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Track the current slide and total count
  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const plugin = Autoplay({ delay: 5000, stopOnInteraction: false })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full mx-auto"
    >
      <div className="w-full md:mx-auto bg-white h-screen ">
        <Carousel
          setApi={setApi}
          plugins={[plugin]}
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-[80vh]">
            {upComingEventsData.map((event, index) => (
              <CarouselItem key={index} className="relative overflow-hidden rounded-xl">
                <img
                  src={event.url || "/placeholder.svg"}
                  alt={event.title}
                  className={cn("h-[80vh] w-full select-none", index === 0 ? "object-cover" : "object-cover")}
                />

                {/* Overlay with event details */}
              
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom navigation buttons */}
          {/* <div className="absolute z-10 flex justify-between w-full top-1/2 -translate-y-1/2 px-4">
            <CarouselPrevious className="h-10 w-10 border-2 opacity-70 hover:opacity-100 transition-opacity" />
            <CarouselNext className="h-10 w-10 border-2 opacity-70 hover:opacity-100 transition-opacity" />
          </div> */}

          {/* Custom pagination indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  current === i ? "bg-white w-8" : "bg-white/50 hover:bg-white/80",
                )}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
        <Eventslide></Eventslide>
      </div>
     
    </motion.div>
  )
}

export default UpComingEvents




// // import { BsDot } from "react-icons/bs"
// // import CountDown from "./CountDown.tsx"
// // import { useEffect, useState } from "react"
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
// // import eventDataStore from "../../store/eventDataStore.ts"

// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { upComingEventsData } from "../../utils/data";
// // import CountDown from "./CountDown";
// // import { BsDot } from "react-icons/bs";

// const UpComingEvents = () => {
//   // const { eventData, fetchEventData }: any = eventDataStore();

//   // useEffect(() => {
//   //     fetchEventData();
//   // }, [eventData]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2 }}
//       className=" w-full mx-auto"
//     >
//       <div className="md:w-11/12 md:mx-auto bg-white mb-[70px] ">
//         <div>
//           <Slider {...settings} className="">
//             {upComingEventsData.map((category, index) => (
//               <div key={index} className=" relative rounded-xl overflow-hidden">
//                 <img
//                   src={`${category.url}`}
//                   alt=""
//                   className={`h-[420px] w-full ${index===0 ? 'object-contain' : 'object-cover'} select-none`}
//                 />
//                 {/* Overlay */}
//                 {/* <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#0000006e] flex justify-center items-center py-7">
//                   <div className="flex flex-col sm:w-[40%] items-center">
//                     <div className="flex gap-3 items-center sm:text-sm text-xs font-Roboto mb-8">
//                       <h5 className="text-yellow-400 uppercase">
//                         {category.date}
//                       </h5>
//                       <BsDot size={20} className="text-yellow-300" />
//                       <h5 className="text-yellow-400 uppercase">
//                         {category.location}
//                       </h5>
//                     </div>
//                     <div className="text-gray-100 font-Josefin sm:text-5xl text-4xl font-bold mb-2 text-center mx-2 sm:mx-0">
//                       {category.title}
//                     </div>
//                     <div className="text-center">
//                       <p className="text-gray-300 font-Roboto sm:text-lg mb-5 mx-2">
//                         {category.description}
//                       </p>
//                     </div>
//                     <div>
//                       <CountDown dateInt={category.dateInt} />
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default UpComingEvents;
