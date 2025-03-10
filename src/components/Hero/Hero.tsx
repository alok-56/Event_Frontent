import UpComingEvents from "../UpComingEvents/UpComingEvents.tsx";
// import Technology from '../Technology/Technology.tsx'
// import Collaboration from '../Collaboration/Collaboration.tsx'
// import News from '../News/News.tsx'
// import Gallery from '../Gallery/Gallery.tsx'
// import Partners from "../Partners/Partners.tsx";
import Footer from "../layout/Footer.tsx";
import { motion } from "framer-motion";
// import Section from "./section.tsx";
// import Link from "../AdditionalLink/Link.tsx";
import QuantumAcceleratorCenter from "./quantum-grid.tsx";
import { useEffect, useState } from "react";
import { GetHomeApi } from "../../Api/Admin/HomeApi.tsx";

const Hero = () => {
  const [carosaldata, setCarosalData] = useState<any>([]);
  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const data = await GetHomeApi();
      console.log(data);
      if (data.status) {
        setCarosalData(data.data[0]);
      } else {
        setCarosalData([]);
      }
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  };
  return (
    <div>
      <UpComingEvents />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full "
      >
        <div className="w-full mx-auto px-4" style={{ marginTop: -100 }}>
          <QuantumAcceleratorCenter  data={carosaldata} />

          <div className="mt-[100px]">
            <div className=" flex justify-center">
              <img
                src={carosaldata?.modalImage}
                alt=""
                className=" lg:w-9/12 w-11/12 "
              />
            </div>
            <p className=" text-center pt-5 md:text-lg font-Poppins font-medium">
              Proposed Model of the Centre
            </p>
          </div>
          <div className="mt-[100px]">
            <div className=" flex justify-center">
              <img
                src={carosaldata?.applicationImage}
                alt=""
                className=" lg:w-5/12 w-9/12"
              />
            </div>
            <p className=" text-center pt-5 md:text-lg font-Poppins font-medium">
              Applications and frontiers of LNOI PIC
            </p>
          </div>
          <div className="mt-[100px]">
            <div className=" flex justify-center">
              <img
                src={carosaldata?.scopeImage}
                alt=""
                className=" lg:w-9/12 w-11/12 "
              />
            </div>
            <p className=" text-center pt-5 md:text-lg font-Poppins font-medium">
              Aim and scope of the project
            </p>
          </div>
        </div>
      </motion.div>
      {/* <Technology />
          <Collaboration />
          <News />
          <Gallery /> */}
      {/* <Partners />
      <Link /> */}
      <Footer />
    </div>
  );
};

export default Hero;
