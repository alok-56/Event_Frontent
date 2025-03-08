import { useParams } from "react-router-dom";
import NavBar from "../components/layout/NavBar.tsx";
import { useEffect, useState } from "react";
import Growth from "../components/Research/Growth.tsx";
import Characterization from "../components/Research/Characterization.tsx";
import Fabrication from "../components/Research/Fabrication.tsx";
import Design from "../components/Research/Design.tsx";

const ResearchPage = () => {
  const { submenu } = useParams();
  const [activeSubHeading, setActiveSubHeading] = useState(0);

  useEffect(() => {
    if (submenu === "design") {
      setActiveSubHeading(1);
    } else if (submenu === "growth") {
      setActiveSubHeading(2);
    } else if (submenu === "charecterization") {
      setActiveSubHeading(3);
    } else if (submenu === "fabrication") {
      setActiveSubHeading(4);
    } else if (submenu === "testing") {
      setActiveSubHeading(5);
    } else if (submenu === "applications") {
      setActiveSubHeading(6);
    }
  }, [submenu]);
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      {submenu === "design" && <Design />}
      {submenu === "growth" && <Growth />}
      {submenu === "charecterization" && <Characterization />}
      {submenu === "fabrication" && <Fabrication />}
      {submenu === "testing" && (
        <div className="flex-grow flex justify-center text-center items-center font-Roboto text-[#575757] text-[25px] font-bold">
          This page is under construction
        </div>
      )}
      {submenu === "applications" && (
        <div className="flex-grow flex justify-center text-center items-center font-Roboto text-[#575757] text-[25px] font-bold">
          This page is under construction
        </div>
      )}
    </div>
  );
};

export default ResearchPage;
