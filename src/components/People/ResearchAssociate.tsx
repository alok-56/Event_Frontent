import { useEffect, useState } from "react";
import PhDStudentsCard from "./PhDStudentsCard";
import { GetresearchApi } from "../../Api/Admin/ResearchAss";

const ResearchAssociate = () => {
  const [data, setData] = useState<Event[]>([]);

  useEffect(() => {
    GetReaserchAssociatedata();
  }, []);

  const GetReaserchAssociatedata = async () => {
    const response = await GetresearchApi();
    if (response.status) {
      setData(response.data);
    } else {
      setData([]);
    }
  };
  return (
    <div>
      <div className="mb-14 py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 grid-cols-1">
          {data &&
            data.map((item, index) => (
              <PhDStudentsCard key={index} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchAssociate;
