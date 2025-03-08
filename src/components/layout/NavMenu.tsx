import { useState } from "react";
import { navData } from "../../utils/data";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavMenu = ({
  activeHeading,
  activeSubHeading,
}: {
  activeHeading: number;
  activeSubHeading: number;
}) => {
  const [active, setActive] = useState<Record<number, boolean>>({});

  const handleMouseEnter = (index: number) => {
    setActive((prev) => ({ ...prev, [index]: true }));
  };
  const handleMouseLeave = (index: number) => {
    setActive((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="w-10/12 mx-auto flex justify-between">
      {navData &&
        navData.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)} // Hover on the whole menu item
            onMouseLeave={() => handleMouseLeave(index)} // Hover off the whole menu item
          >
            {/* Menu Text */}
            {item.link ? (
              <Link to={item.link} className={`flex py-4 px-1`}>
                <motion.h1
                  className={`text-lg font-semibold cursor-pointer mr-[0.5px] font-Poppins`}
                  animate={{
                    color:
                      activeHeading === index + 1
                        ? "#0f2444"
                        : "rgba(113, 128, 150, 1)", // Smooth color transition
                  }}
                  whileHover={{ color: "#0f2444" }} // Change color on hover
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h1>
              </Link>
            ) : (
              <div
                className={`flex py-4 px-1 ${
                  activeHeading === index + 1 || active[index]
                    ? "text-[#0f2444]"
                    : "text-slate-500 "
                } items-center  hover:text-[#0f2444] select-none`}
              >
                <motion.h1
                  className={`text-lg font-semibold cursor-default mr-[0.5px] font-Poppins`}
                  animate={{
                    color:
                      activeHeading === index + 1 || active[index]
                        ? "#0f2444"
                        : "rgba(113, 128, 150, 1)", // Smooth color transition
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h1>

                <motion.div
                  animate={{
                    rotate: active[index] ? 180 : 0, // Smooth rotation of the arrow
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {active[index] ? (
                    <TiArrowSortedUp className="text-xl" />
                  ) : (
                    <TiArrowSortedDown className="text-xl" />
                  )}
                </motion.div>
              </div>
            )}
            {item.submenu && (
              <motion.div
                className={`absolute  z-30 top-full left-0 bg-[#808080] w-[200px] ${
                  active[index] ? "block" : "hidden"
                } shadow-[0_3px_10px_rgb(0,0,0,0.4)] rounded-b-md`}
                initial={{ opacity: 0, height: 0 }} // Start hidden
                animate={{
                  opacity: active[index] ? 1 : 0, // Fade in
                  height: active[index] ? "auto" : 0, // Expand or collapse
                }}
                exit={{
                  opacity: 0, // Fade out when leaving
                  height: 0, // Collapse to zero height
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  height: { duration: 0.3 },
                }}
              >
                <div className=" relative h-full w-full">
                  {item.submenu.map((subitem, subindex) => (
                    <motion.div
                      key={subindex}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: active[index] ? 1 : 0, // Fade in as submenu expands
                      }}
                      transition={{
                        delay: 0.1 * subindex, // Stagger submenu items
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className="w-full relative"
                      onClick={() => window.location.reload()}
                    >
                      <Link
                        to={subitem.link}
                        className={`flex px-3 font-Poppins font-medium ${
                          activeHeading === index + 1 &&
                          activeSubHeading === subindex + 1
                            ? "text-[#0f2444]"
                            : "text-white"
                        }`}
                        
                      >
                        <motion.p
                          className={`cursor-pointer w-full border-b-2  pb-2 pt-2 ${
                            subindex === item.submenu.length - 1
                              ? "border-none"
                              : "border-[#cecece] "
                          }`}
                          whileHover={{ color: "#0f2444" }}
                          transition={{ duration: 0.3 }}
                          
                        >
                          {subitem.title}
                        </motion.p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
    </div>
  );
};

export default NavMenu;
