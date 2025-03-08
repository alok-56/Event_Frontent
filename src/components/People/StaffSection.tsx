import { useEffect, useState } from "react";

import PhDStudentsCard from "./PhDStudentsCard";
import { GetstaffApi } from "../../Api/Admin/Staff";

const StaffSection = () => {
  const [data, setData] = useState<Event[]>([]);

  useEffect(() => {
    GetEventsdata();
  }, []);

  const GetEventsdata = async () => {
    const response = await GetstaffApi();
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

export default StaffSection;
