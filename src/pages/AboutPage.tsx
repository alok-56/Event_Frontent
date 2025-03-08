import NavBar from "../components/layout/NavBar.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Publication from "../components/About/Publication.tsx";

const AboutPage = () => {
  const { submenu } = useParams();
  const [activeSubHeading, setActiveSubHeading] = useState(0);
  console.log(activeSubHeading);
  useEffect(() => {
    if (submenu === "concept") {
      setActiveSubHeading(1);
    } else if (submenu === "research") {
      setActiveSubHeading(2);
    } else if (submenu === "publication") {
      setActiveSubHeading(3);
    }
  }, [submenu]);
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      {submenu === "publication" && (
        <div className="w-10/12 mx-auto py-10">
          <Publication />
        </div>
      )}
      {submenu === "research" && (
        <div className="flex-grow flex justify-center text-center items-center font-Roboto text-[#575757] text-[25px] font-bold">
        This page is under construction
      </div>
      )}
      {submenu === "concept" && (
        <div className="flex-grow flex justify-center text-center items-center font-Roboto text-[#575757] text-[25px] font-bold">
          This page is under construction
        </div>
      )}
     
    </div>
  );
};

export default AboutPage;
