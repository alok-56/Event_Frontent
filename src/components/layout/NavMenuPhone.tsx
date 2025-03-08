
import { RxCross2 } from "react-icons/rx";
import { navData } from "../../utils/data";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const NavMenuPhone = ({ activeHeading, activeSubHeading, setActive }: {
    activeHeading: number, activeSubHeading: number, setActive: any
}) => {

    const [open, setOpen] = useState<number>(0);

    const handleOpen = (index: number) => {
        if (open === index) {
            setOpen(0);
        } else {
            setOpen(index);
        }
    };

    return (
        <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 bottom-0 h-screen w-screen bg-gray-200 z-50"
        >
            <div className="w-full flex justify-end p-3">
                <RxCross2 onClick={() => setActive(false)} size={30} className="p-1 bg-[#0f2444] text-white rounded cursor-pointer" />
            </div>
            {navData && navData.map((item, index) => (
                <div key={index} className="px-8">
                    <div className={`${index + 1 === navData.length ? 'border-none' : 'border-b-[1px] border-b-[#25416aa0]'} py-4`}>
                        {item.link ? (
                            <Link
                                to={item.link}
                                onClick={() => setActive(false)}
                                className={`${activeHeading === index + 1 ? 'text-[#0f2444]' : 'text-slate-500'} items-center `}
                            >
                                <h1 className="font-Poppins">
                                    {item.title}
                                </h1>
                            </Link>
                        ) : (
                            <div className="select-none" onClick={() => { handleOpen(index + 1); }}>
                                <div className={`flex items-center ${activeHeading === index + 1 ? 'text-[#0f2444]' : 'text-slate-500'}`}>
                                    <h1 className="font-Poppins ">
                                        {item.title}
                                    </h1>
                                    <div>
                                        {open === index + 1 ? <TiArrowSortedUp className="text-xl" /> : <TiArrowSortedDown className="text-xl" />}
                                    </div>
                                </div>
                                {item.submenu && open === index + 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.submenu.map((subitem, subindex) => (
                                            <div
                                                key={subindex}
                                                className={`flex flex-col ${activeHeading === index + 1 && activeSubHeading === subindex + 1 ? 'text-[#0f2444]' : 'text-slate-500'} mx-2 select-none`}
                                            >
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={subitem.link}
                                                    className="hover:text-[#0f2444] font-Poppins"
                                                >
                                                    <h1 className="text-sm mt-2">
                                                        {subitem.title}
                                                    </h1>
                                                </Link>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default NavMenuPhone;
