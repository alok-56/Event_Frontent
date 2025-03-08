import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Calendar, User } from "lucide-react";
import { useEffect, useState } from "react";
import { GetPublicationApi } from "../../Api/Admin/Publication";

// Define the type for an event
interface Event {
  _id: string;
  Title: string;
  Description: string;
  Date: string;
  eventlocation: string;
  Image: string;
  Publisedby: string;
}

export default function Publication() {
  const [data, setData] = useState<Event[]>([]);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    GetEventsdata();
  }, []);

  const GetEventsdata = async () => {
    const response = await GetPublicationApi();
    if (response.status) {
      setData(response.data);
    } else {
      setData([]);
    }
  };

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="w-11/12 mx-auto py-24 px-4">
      <h2 className="text-2xl font-semibold mb-6">All Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((event) => (
          <Card
            key={event._id}
            className="overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <div className="relative h-48 w-full">
              <img
                src={event.Image || "/placeholder.svg"}
                alt={event.Title}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{event.Title}</CardTitle>
              <CardDescription className="text-sm">
                {expanded[event._id]
                  ? event.Description
                  : truncateText(event.Description, 50)}
                {event.Description.split(" ").length > 50 && (
                  <button
                    onClick={() => toggleExpand(event._id)}
                    className="text-blue-500 ml-2 underline"
                  >
                    {expanded[event._id] ? "Read Less" : "Read More"}
                  </button>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{event.Date}</span>
                </div>
                <div className="flex items-center col-span-2">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{event.Publisedby}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
