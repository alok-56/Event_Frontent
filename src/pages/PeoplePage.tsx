import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/layout/NavBar.tsx";
import PhDStudentsCard from "../components/People/PhDStudentsCard.tsx";
import StaffSection from "../components/People/StaffSection.tsx";
import { phdCardData } from "../utils/data.ts";
import ResearchAssociate from "../components/People/ResearchAssociate.tsx";
import { GetstudentsApi } from "../Api/Admin/Students.tsx";

const PeoplePage = () => {
  const { submenu } = useParams();
  const [activeSubHeading, setActiveSubHeading] = useState(0);
  const [data, setData] = useState<Event[]>([]);
  useEffect(() => {
    if (submenu === "investigators") {
      setActiveSubHeading(1);
    } else if (submenu === "research-associates") {
      setActiveSubHeading(2);
    } else if (submenu === "students") {
      setActiveSubHeading(3);
    } else if (submenu === "staff") {
      setActiveSubHeading(4);
    }
  }, [submenu]);

  
  
    useEffect(() => {
      GetPhdDatadata();
    }, []);
  
    const GetPhdDatadata = async () => {
      const response = await GetstudentsApi();
      if (response.status) {
        setData(response.data);
      } else {
        setData([]);
      }
    };

  return (
    <div className="h-screen flex flex-col">
      <NavBar  />
      {submenu === "students" && (
        <div className="w-10/12 mx-auto py-32">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1">
            {data &&
              data.map((item, index) => (
                <PhDStudentsCard key={index} item={item} />
              ))}
          </div>
        </div>
      )}
      {submenu === "staff" && (
        <div className="w-10/12 mx-auto py-10">
          <StaffSection />
        </div>
      )}
      {submenu === "research-associates" && (
        <div className="w-10/12 mx-auto py-10">
          <ResearchAssociate />
        </div>
      )}
      {submenu === "investigators" && (
        <div className="flex-grow flex justify-center text-center items-center font-Roboto text-[#575757] text-[25px] font-bold">
          This page is under construction
        </div>
      )}
    </div>
  );
};

export default PeoplePage;
