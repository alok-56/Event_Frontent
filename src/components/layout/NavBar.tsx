import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > prevScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setPrevScrollY(scrollY.get());
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, prevScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "#",
      dropdown: [
        { name: "Concept", href: "/about/concept" },
        { name: "Research", href: "/about/research" },
        { name: "Publication", href: "/about/publication" },
      ],
    },
    { name: "Collaborators", href: "/collaborators" },
    {
      name: "Research Facilities",
      href: "#",
      dropdown: [
        { name: "Design", href: "/research-facilities/design" },
        { name: "Growth", href: "/research-facilities/growth" },
        {
          name: "Charecterization",
          href: "/research-facilities/charecterization",
        },
        { name: "Fabrication", href: "/research-facilities/fabrication" },
        { name: "Testing", href: "/research-facilities/testing" },
        { name: "Applications", href: "/research-facilities/applications" },
      ],
    },
    {
      name: "People",
      href: "#",
      dropdown: [
        { name: "Investigators", href: "/people/investigators" },
        { name: "Research Associates", href: "/people/research-associates" },
        { name: "Students", href: "/people/students" },
        { name: "Administrative Staff", href: "/people/staff" },
      ],
    },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: hidden ? -35 : 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b transform",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-3"
          : "bg-white py-5"
      )}
    >
      <div className=" mx-auto px-4">
        <p
          style={{
            textAlign: "center",
            fontSize: "16",
            fontWeight: "bold",
            color: "#0f2444",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          NATIONAL CENTRE FOR QUANTUM ACCELERATOR CHIP
        </p>

        <div className="flex items-center justify-between w-full">
        
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="relative h-12 w-12">
              <img
                src={logo}
                alt="NCQAC Logo"
                className="object-contain w-16 h-16"
              />
            </Link>
          </motion.div>

          


          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <motion.ul
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{ delay: index * 0.05 }}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all",
                          activeDropdown === item.name
                            ? "bg-[#0f2444] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "ml-1 transition-transform duration-200",
                            activeDropdown === item.name ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: 10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-50 overflow-hidden"
                          >
                            <div className="py-1">
                              {item.dropdown.map((subItem, idx) => (
                                <motion.div
                                  key={subItem.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <Link
                                    to={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0f2444]"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="relative h-12 w-12">
              <img
                src={logo2}
                alt="NCQAC Logo"
                className="object-contain w-16 h-16"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-20"
          >
            <div className="px-4 py-2">
              <nav>
                <ul className="space-y-1">
                  {navItems.map((item, idx) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {item.dropdown ? (
                        <div className="mb-2">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 rounded-lg hover:bg-gray-50"
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronDown
                              size={16}
                              className={cn(
                                "transition-transform duration-200",
                                activeDropdown === item.name ? "rotate-180" : ""
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-1 ml-4 pl-4 border-l border-gray-200"
                              >
                                {item.dropdown.map((subItem, subIdx) => (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIdx * 0.05 }}
                                  >
                                    <Link
                                      to={subItem.href}
                                      className="block py-2.5 text-gray-600 hover:text-blue-600"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import logo2 from "../../assets/logo2.png";
// // import logo3 from "../../assets/image.png";
// import NavMenu from "./NavMenu.tsx";
// import NavMenuPhone from "./NavMenuPhone.tsx";
// import { useState } from "react";
// import { IoMenu } from "react-icons/io5";

// const NavBar = ({
//   activeHeading,
//   activeSubHeading,
// }: {
//   activeHeading: number;
//   activeSubHeading: number;
// }) => {
//   const [scrollable, setScrollable] = useState<boolean>(false);
//   const [active, setActive] = useState<boolean>(false);
//   const [scrollPhone, setScrollPhone] = useState<boolean>(false);

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 80) {
//       setScrollable(true);
//     } else {
//       setScrollable(false);
//     }
//   });
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 0) {
//       setScrollPhone(true);
//     } else {
//       setScrollPhone(false);
//     }
//   });
//   return (
//     <div className="w-full">
//       {/* first component */}
//       <div
//         className={`hidden xl:w-11/12 xl:mx-auto mx-2 py-3 lg:flex justify-between items-center z-30 bg-white`}
//       >
//         <Link to={"/"}>
//           <img src={logo} alt="" className=" object-contain w-[120px]" />
//         </Link>

//         <div className=" lg:flex flex-col justify-center">
//           <h1 className=" xl:text-[36px] text-2xl font-semibold font-Josefin text-[#0f2444]">
//             NATIONAL CENTRE FOR QUANTUM ACCELERATOR CHIP
//           </h1>
//           <h4 className=" text-xl font-Roboto text-slate-500">
//             Using Lithium Niobate
//           </h4>
//         </div>

//         <Link to={""}>
//           <img src={logo2} alt="" className=" object-contain w-[100px]" />
//         </Link>
//       </div>
//       {/* second component */}
//       <div
//         className={`hidden ${
//           scrollable && "lg:fixed top-0 left-0 right-0 shadow "
//         }w-full bg-slate-300 z-20 lg:block`}
//       >
//         <NavMenu
//           activeHeading={activeHeading}
//           activeSubHeading={activeSubHeading}
//         />
//       </div>
//       {/* phone nav */}
//       <div className="lg:hidden ">
//         <div className="w-11/12 flex flex-col justify-center items-center py-[10px]">
//           <h1 className=" text-[20px] text-center font-semibold font-Josefin text-[#0f2444]">
//             NATIONAL CENTRE FOR QUANTUM ACCELERATOR CHIP
//           </h1>
//           <h4 className=" text-xl font-Roboto text-slate-500">
//             Using Lithium Niobate
//           </h4>
//         </div>
//         <div
//           className={`${
//             scrollPhone && "fixed top-0 left-0 right-0 shadow"
//           } bg-white z-20 lg:hidden`}
//         >
//           <div className=" w-11/12 mx-auto flex items-center justify-between py-2">
//             <div>
//               <IoMenu
//                 size={30}
//                 className=" text-[#0f2444]"
//                 onClick={() => setActive(!active)}
//               />
//             </div>

//             <div className=" flex gap-5 items-center">
//               <Link to={"/"} className=" w-[80px] h-full">
//                 <img src={logo} alt="" className=" object-contain" />
//               </Link>
//               <Link to={""} className=" w-[60px] h-full">
//                 <img src={logo2} alt="" className=" object-contain" />
//               </Link>
//               {/* <Link to={""} className=" w-[100px] h-full">
//                 <img src={logo3} alt="" className=" object-contain" />
//               </Link> */}
//             </div>
//           </div>

//           {/* phone nav menu */}
//           {active && (
//             <NavMenuPhone
//               activeHeading={activeHeading}
//               activeSubHeading={activeSubHeading}
//               setActive={setActive}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
