import React, { useEffect, useState } from "react";
import { GetEventApi } from "../../Api/Admin/Event";

const Eventslide: React.FC = () => {
  const marqueeStyle: React.CSSProperties = {
    display: "inline-block",
    whiteSpace: "nowrap",
    position: "absolute",
    animation: "marquee 40s linear infinite",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: "8px 16px",
    background: "linear-gradient(45deg, #ff0000, #ff4d4d)",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(242, 237, 237, 0.7)",
    animationDelay: "0s",
  };

  const containerStyle: React.CSSProperties = {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    background: "#fff5f5",
    height: "50px",
    display: "flex",
    alignItems: "center",
  };

  const [event, setEvent] = useState<any>([]);

  const handleClick = () => {
    window.open(event[0]?.link, "_blank");
  };

  const fetchEvents = async () => {
    try {
      const data = await GetEventApi();
      if (data.status) {
        let filterdata = data.data.filter(
          (item: any) => item.type === "Upcoming"
        );
        setEvent(filterdata);
      } else {
        setEvent([]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={containerStyle}>
      <p style={marqueeStyle} onClick={handleClick}>
        🚨 {event[0]?.Title}! Click here for important event details! 🚀
      </p>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100vw); }
            to { transform: translateX(-100%); }
          }
          @keyframes flash {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
};

export default Eventslide;
