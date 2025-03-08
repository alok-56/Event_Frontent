import UpComingEvents from "../UpComingEvents/UpComingEvents.tsx";
// import Technology from '../Technology/Technology.tsx'
// import Collaboration from '../Collaboration/Collaboration.tsx'
// import News from '../News/News.tsx'
// import Gallery from '../Gallery/Gallery.tsx'
import Partners from "../Partners/Partners.tsx";
import Footer from "../layout/Footer.tsx";
import { motion } from "framer-motion";
import Section from "./section.tsx";
import Link from "../AdditionalLink/Link.tsx";

import model from "../../assets/HeroImg/model.png";
import application from "../../assets/HeroImg/application.png";
import scope from "../../assets/HeroImg/scope.png";
import QuantumAcceleratorCenter from "./quantum-grid.tsx";

const Hero = () => {
  return (
    <div>
      <UpComingEvents />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full "
      >
        <div className="w-full mx-auto px-4" style={{marginTop:-100}}>
          <QuantumAcceleratorCenter />

          <div className="mt-[100px]">
            <div className=" flex justify-center">
              <img src={model} alt="" className=" lg:w-9/12 w-11/12 " />
            </div>
            <p className=" text-center pt-5 md:text-lg font-Poppins font-medium">
              Proposed Model of the Centre
            </p>
          </div>
          <div className="mt-[100px]">
            <div className=" flex justify-center">
              <img src={application} alt="" className=" lg:w-5/12 w-9/12" />
            </div>
            <p className=" text-center pt-5 md:text-lg font-Poppins font-medium">
              Applications and frontiers of LNOI PIC
            </p>
          </div>
          <div className="mt-[100px]">
            <div className=" flex justify-center">
              <img src={scope} alt="" className=" lg:w-9/12 w-11/12 " />
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
